import { UserProviders } from './user.providers';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private readonly userProviders;
    constructor(userProviders: UserProviders);
    private readonly logger;
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
    findOneByID(id: number): Promise<string | import("./entity/user.entity").User>;
    create(n_user: CreateUserDto): Promise<void | import("./entity/user.entity").User>;
    patchUpdate(id: number, body: any): Promise<string | import("./entity/user.entity").User>;
    putUpdate(id: number, body: UserDto): Promise<string | import("./entity/user.entity").User>;
    delete(id: number): Promise<"user didn't find." | "user deleted.">;
}
