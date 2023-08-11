import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService} from './app.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';

@Module({
    imports : [UserModule, LoginModule,
        TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '5432',
        database: 'localweb',
        entities: [ User ], 
        synchronize: true,
        autoLoadEntities: true,
      }),
      ConfigModule.forRoot({
        envFilePath : '.env',
        isGlobal:true,
      })
    ],
    controllers: [AppController],
    providers : [AppService],
})

export class AppModule {}