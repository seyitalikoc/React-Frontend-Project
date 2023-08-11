import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { ContextService } from "../login/context.service";
export declare class JwtGuard implements CanActivate {
    private readonly jwtService;
    private readonly contextService;
    constructor(jwtService: JwtService, contextService: ContextService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private extractTokenFromHeader;
}
