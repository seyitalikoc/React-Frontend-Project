import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { JwtModule } from '@nestjs/jwt';
import { ContextService } from '../login/context.service';

describe('UserController', () => {
    let userController : UserController;
    let userService : UserService;
    let userProviders : UserProviders;
    let contextService : ContextService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports : [User, CreateUserDto,
                JwtModule.register({
                    secret : process.env.JWT_SECRET,
                    signOptions : {algorithm : 'HS256'}
                })],
            controllers : [UserController],
            providers: [UserService, ContextService, {
                provide : UserProviders,
                useValue: {
                    findAll : jest.fn().mockResolvedValue([
                        {name : 'name #1',profession : 'profession #1', username: 'username #1',  id : 1},
                        {name : 'name #2',profession : 'profession #2', username: 'username #2',  id : 2},
                        {name : 'name #3',profession : 'profession #3', username: 'username #3',  id : 3},
                    ]),
                    findOneByID : jest.fn().mockImplementation((id:number) =>
                        Promise.resolve({
                            name : 'name #1',
                            profession : 'profession #1',
                            username : 'username #1',
                            password : 'password #1',
                            id : 1,
                        }),
                    ),
                    create : jest.fn().mockImplementation((user : CreateUserDto) =>
                        Promise.resolve({id: 1, ...user}),
                    ),
                    putUpdate : jest.fn().mockImplementation((user : CreateUserDto) =>
                        Promise.resolve({id: 1, ...user}),
                    ),
                    patchUpdate : jest.fn().mockImplementation((user : CreateUserDto) =>
                        Promise.resolve({id: 1, ...user}),
                    ),
                    delete : jest.fn().mockResolvedValue({deleted: true}),
                },
            },
        ],
    }).compile();
    
    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);
    userProviders = moduleRef.get<UserProviders>(UserProviders);
    });

    describe('findAll', ()=> {
        it('should get an array of users', async () => {
            await expect(userController.findAll()).resolves.toEqual([
                {
                    name: 'name #1',
                    profession: 'profession #1',
                    username : 'username #1',
                    id: 1,
                  },
                  {
                    name: 'name #2',
                    profession: 'profession #2',
                    username : 'username #2',
                    id: 2,
                  },
                  {
                    name: 'name #3',
                    profession: 'profession #3',
                    username : 'username #3',
                    id: 3,
                  },
            ]);
        });
    });

    describe('findOneByID', ()=> { 
        it('should get a single user', async () => {
            const result: any = '' ;
            jest.spyOn(userService,'findOneByID').mockImplementation(() => result);

            expect(await userController.findOneById(1)).toBe(result);
        });
    });

    describe('create', ()=> {
        it('should create a new user', async () => {
            const user : CreateUserDto = {
                name: 'name #1',
                profession: 'profession #1',
                username : 'username #1',
                password: 'password #1',
            }
            await expect(userController.create(user)).resolves.toEqual({
                id : 1,
                ...user,
            });
        });
    });

    describe('patchUpdate', ()=> {
        it('should update a user with patch', async () => {
            const result: any = '' ;
            jest.spyOn(userService,'patchUpdate').mockImplementation(() => result);

            expect(await userController.patchUpdate(1,{})).toBe(result);
        });
    });

    describe('putUpdate', ()=> {
        it('should update a user with put',  () => {
            const user : UserDto = {
                name: 'name #1',
                profession: 'profession #1',
                username : 'username #1',
                password: 'password #1',
                id: 1,
            }
            const result: any = '' ;
            jest.spyOn(userService,'putUpdate').mockImplementation(() => result);

            expect(userController.putUpdate(1,user)).toBe(result);
        });
    });

    describe('delete', ()=> {
        it('should return a string', async () => {
            const result = "asd";
            jest.spyOn(userService,'delete').mockImplementation(async () => result);

            expect(await userController.delete(1)).toBe(result);
        });
    });
});