import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import  request from 'supertest';
import { UserModule } from '../../src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from '../../src/user/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

describe('Users - /users (e2e)', () => {
  const users = {
    name: makeid(5),
    profession: makeid(5),
    username : makeid(5),
    password: makeid(5),
  };
  let app: INestApplication;

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
        UserModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create [POST /users]', () => { // beklenen değeri alamadık
    return request(app.getHttpServer())
      .post('/users/create')
      .send(users as CreateUserDto)
      .expect(201);
  });

  it('Get all users [GET /users]', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Get one user [GET /users/:id]', () => {
    return request(app.getHttpServer())
      .get('/users/1')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Update [PATCH /users/:id]', () => {
    return request(app.getHttpServer()).patch('/users/1').expect(200);
  })

  it('Update [PUT /users-:id', () => {
    return request(app.getHttpServer()).put('/users/1').expect(200);
  })

  it('Delete one user [DELETE /users/:id]', () => { // hata var - yeni eklenen id'yi bilmediğimiz için silme de hata diyor
    return request(app.getHttpServer()).delete('/users/1').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
});