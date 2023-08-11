import { User } from '../user/entity/user.entity';
import { type Repository } from 'typeorm';
import { UserProfileDto } from 'src/user/dto/user-profile.dto';
export declare class LoginProvider {
    private userRepository;
    private readonly logger;
    constructor(userRepository: Repository<User>);
    findOneByName(username: string): Promise<UserProfileDto>;
    findOneWithUsername(username: string): Promise<User>;
}
