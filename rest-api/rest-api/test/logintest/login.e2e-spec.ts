import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import  request from 'supertest';
import { LoginModule } from '../../src/login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../src/user/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UserProfileDto } from '../../src/user/dto/user-profile.dto';

describe('Login - /login (e2e', () => {
    let app : INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '5432',
                database: 'test',
                entities: [ User ],
                autoLoadEntities: true,
            }),
            JwtModule.register({
                secret : process.env.JWT_SECRET,
                signOptions : {algorithm : 'HS256'}
            }),
            ConfigModule.forRoot({
                envFilePath : '.env',
                isGlobal:true,
            }),
            LoginModule,
            ]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    })

    it('LogIn [POST /login]', () => {
        return request(app.getHttpServer())
        .post('/login')
        .send({username: 'admin', password: 'admin'})
        .expect(String);
    });

    it('RefreshJwtToken [POST /login/refresh]', () => {
        return request(app.getHttpServer())
        .post('/login/refresh')
        .send('sada.dasdasd.asdasda')
        .expect(String);
    });

    it('GetProfile [GET /login/find/:username]', () => {
        return request(app.getHttpServer())
        .get('/login/find/admin')
        .expect(String);
    });

    it('GetUserProfile [GET /login/profile]', () => {
        return request(app.getHttpServer())
        .get('/login/profile')
        .expect(String);
    })
})