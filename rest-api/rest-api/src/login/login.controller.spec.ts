import { Test } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginProvider } from './login.provider';
import { UserProfileDto } from '../user/dto/user-profile.dto';
import { ContextService } from './context.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';


describe('LoginController', () => {

    let loginController : LoginController;
    let loginService : LoginService;
    let loginProvider : LoginProvider;
    let contextService : ContextService;
    let jwtService : JwtService;
    let userRepository : Repository<User>;

    beforeEach(async () => {
        const moduleRef = await  Test.createTestingModule({
            controllers : [LoginController],
            providers: [LoginService, ContextService, JwtService, LoginProvider, {
                provide: getRepositoryToken(User),
                    useValue: {
                    find: jest.fn(() => [User]),
                    }
              },
            ],
            imports: [ User]
    }).compile();

    loginService = moduleRef.get<LoginService>(LoginService);
    loginController = moduleRef.get<LoginController>(LoginController);
    loginProvider = moduleRef.get<LoginProvider>(LoginProvider);
    contextService = moduleRef.get<ContextService>(ContextService);
    jwtService = moduleRef.get<JwtService>(JwtService);

    });

    describe('logIn', ()=> {
        it('should generate jwt access token and refresh token.', async () => {
            await expect(loginController.logIn('adasdad.adasda.asdasd')).resolves.toEqual(String);
        })
    })

    describe('refreshJwtToken', () => {
        it('should generate new acces token with refresh token',async () => {
            await expect(loginController.refreshJwtToken('adasdad.adasda.asdasd')).resolves.toEqual(String);
        })
    })

    describe('getProfile', () => {
        it('should return user\'s info', async () => {
            await expect(loginController.getProfile('aa1234')).resolves.toEqual(String);
        })
    })

    describe('getUserProfile', () => {
        it('should return user\' info type of UserProfileDto', async () => {
            await expect(loginController.getUserProfile('adasdad.adasda.asdasd')).resolves.toEqual(UserProfileDto);
        })
    })

});