import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { JwtModule } from "@nestjs/jwt";
import { LoginProvider } from "./login.provider";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/entity/user.entity";
import { ConfigModule } from "@nestjs/config";
import { ContextService } from "./context.service";

@Module({
    controllers: [LoginController],
    providers: [LoginService, LoginProvider, ContextService],
    imports : [
      TypeOrmModule.forFeature([User]),
      ConfigModule.forRoot({
        envFilePath : '.env',
        isGlobal:true,
      }),
      JwtModule.register({
          secret : process.env.JWT_SECRET,
          signOptions : {algorithm : 'HS256'}
        })
      ]
})
export class LoginModule{}