import { Injectable, Request, Logger, HttpException, HttpStatus, Scope } from '@nestjs/common';
import { LoginProvider } from './login.provider';
import { ContextService } from './context.service';
import { JwtService } from '@nestjs/jwt';
import jwt from "jsonwebtoken";

@Injectable()
export class LoginService {
  private readonly logger = new Logger(LoginService.name);

  constructor(
      private readonly loginProvider : LoginProvider,
      private readonly contextService : ContextService,
      private readonly jwtService : JwtService,
  ){}

  async logIn( @Request() req ) : Promise<Object>{
    try{
      const user = await this.loginProvider.findOneWithUsername(req.body.username);
  
      if (user['password'] !== req.body.password) {
        throw new HttpException('Username or password is wrong!!!', HttpStatus.FORBIDDEN);
      }
      else{
        return {
          access_token: this.jwtService.sign(
            {
              name: user['name'], 
              profession: user['profession'], 
              username: user['username'], 
              _id: user['id']
            },
            {
              secret : process.env.JWT_SECRET,
              expiresIn : '15m'
            }
          ),
          refresh_token: this.jwtService.sign(
            {
              name: user['name'], 
              profession: user['profession'], 
              username: user['username'], 
              _id: user['id']
            },
            {
              secret : process.env.JWT_REFRESH_SECRET,
              expiresIn : '1h'
            })
        };
      }      
    }catch(error){
      this.logger.error('[SIGNIN] '+error);
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Username or password is wrong!!!'
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  async refreshToken(@Request() req){
    try{
      if( jwt.verify((req.body.headers.authorization).split(' ')[1], process.env.JWT_REFRESH_SECRET)){
        const user = jwt.verify((req.body.headers.authorization).split(' ')[1], process.env.JWT_REFRESH_SECRET);
        
        return {
          access_token: this.jwtService.sign(
            {
              name: user['name'], 
              profession: user['profession'], 
              username: user['username'], 
              _id: user['_id']
            },
            {
              secret : process.env.JWT_SECRET,
              expiresIn : '15m'
            }),
        }
      }
    }catch(error){
      this.logger.error('[REFRESHTOKEN] '+error);
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'You not have an access for it. Please login and enter the key, or control the key.'
      }, HttpStatus.UNAUTHORIZED, {
        cause: error
      }
    );
    }
  }

  async findOne(username : string){
    try{
      return this.loginProvider.findOneByName(username);
    }catch(error){
      this.logger.error('[FINDONE] '+error);
    }
  }

  async getUserProfile(){
    try{
      return this.contextService.getContext();
    }catch(error){
      this.logger.error('[GETUSERPROFILE] '+error);
    }
  }
}