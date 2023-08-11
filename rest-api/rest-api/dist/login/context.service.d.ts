import { UserProfileDto } from '../user/dto/user-profile.dto';
export declare class ContextService {
    private context;
    getContext(): Promise<UserProfileDto>;
    setContext(obj: UserProfileDto): void;
}
