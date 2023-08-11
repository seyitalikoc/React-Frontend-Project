import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { ContextService } from "../login/context.service";
import { JwtModule } from '@nestjs/jwt';
import { UserProfileDto } from './dto/user-profile.dto';

@Module({
    imports : [TypeOrmModule.forFeature([User, UserProfileDto]),
    JwtModule.register({
        secret : process.env.JWT_SECRET,
        signOptions : {algorithm : 'HS256'}
      })],
    controllers: [UserController],
    providers : [UserService, UserProviders, ContextService],
})

export class UserModule {}