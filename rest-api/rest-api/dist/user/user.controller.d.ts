import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    findAll(): Promise<{
        name: string;
        username: string;
        profession: string;
        id: number;
        eMail: string;
        birthDate: Date;
        IsActive: boolean;
        language: string;
    }[]>;
    findOneById(id: number): Promise<string | import("./entity/user.entity").User>;
    create(newUser: CreateUserDto): Promise<void | import("./entity/user.entity").User>;
    patchUpdate(id: number, body: any): Promise<string | import("./entity/user.entity").User>;
    putUpdate(id: number, body: UserDto): Promise<string | import("./entity/user.entity").User>;
    delete(id: number): Promise<String>;
}
