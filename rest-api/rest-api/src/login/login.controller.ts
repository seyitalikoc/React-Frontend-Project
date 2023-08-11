import { Post, Controller, Request, Get, Param, UseGuards, Logger } from "@nestjs/common";
import { LoginService } from "./login.service";
import { JwtGuard } from "../guard/jwt.guard";

@Controller('/login')
export class LoginController {
    private readonly logger = new Logger(LoginController.name);

    constructor(
        private readonly loginService : LoginService,
    ){}

    @Post('')
    async logIn( @Request() req){
        try{
            return this.loginService.logIn(req);
        }catch(error){
            this.logger.error('[LOGIN]: '+ error);
        }
    }
    @Post('/refresh')
    async refreshJwtToken( @Request() req){
        try{
            return this.loginService.refreshToken(req);
        }catch(error){
            this.logger.error('[REFRESHJWTTOKEN]: '+ error);
        }
    }

    //@UseGuards(JwtGuard)
    @Get('/find/:username')
    async getProfile( @Param('username') username: string ){
        try{
            return this.loginService.findOne(username);
        }catch(error){
            this.logger.error('[GETPROFILE]: '+ error);
        }
    }

    //@UseGuards(JwtGuard)
    @Get('/profile')
    async getUserProfile( @Request() request){
        try{
            return this.loginService.getUserProfile();
        }catch(error){
            this.logger.error('[GETUSERPROFILE]: '+ error);
        }
    }
}