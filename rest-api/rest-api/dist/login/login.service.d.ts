import { LoginProvider } from './login.provider';
import { ContextService } from './context.service';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private readonly loginProvider;
    private readonly contextService;
    private readonly jwtService;
    private readonly logger;
    constructor(loginProvider: LoginProvider, contextService: ContextService, jwtService: JwtService);
    logIn(req: any): Promise<Object>;
    refreshToken(req: any): Promise<{
        access_token: string;
    }>;
    findOne(username: string): Promise<import("../user/dto/user-profile.dto").UserProfileDto>;
    getUserProfile(): Promise<import("../user/dto/user-profile.dto").UserProfileDto>;
}
