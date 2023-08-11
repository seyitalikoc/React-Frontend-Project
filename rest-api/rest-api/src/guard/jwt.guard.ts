import { CanActivate, ExecutionContext, HttpException, HttpStatus, Inject, Injectable, Logger, Scope } from "@nestjs/common";
import { Request } from 'express';
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { ContextService } from "../login/context.service";

@Injectable()
export class JwtGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService,
        private readonly contextService: ContextService,
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try{
            const request = context.getArgs();
            const authorization = this.extractTokenFromHeader(request[0]);
            const temp = this.jwtService.verify(authorization,{secret: process.env.JWT_SECRET});
            const user = {
                name: temp.name,
                profession: temp.profession,
                username: temp.username,
                id:temp._id,
                eMail: temp.eMail,
                birthDate: temp.birthDate,
                IsActive: temp.IsActive,
                language: temp.language
            }
            this.contextService.setContext(user);
            return true;
        }catch(error){
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                error: 'You not have an access for it. Please login and enter the key or control the key.'
              }, HttpStatus.UNAUTHORIZED, {
                cause: error
              }
            );
        }
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return token;
    }
} 