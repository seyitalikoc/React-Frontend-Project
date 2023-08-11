import { LoginService } from "./login.service";
export declare class LoginController {
    private readonly loginService;
    private readonly logger;
    constructor(loginService: LoginService);
    logIn(req: any): Promise<Object>;
    refreshJwtToken(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(username: string): Promise<import("../user/dto/user-profile.dto").UserProfileDto>;
    getUserProfile(request: any): Promise<import("../user/dto/user-profile.dto").UserProfileDto>;
}
