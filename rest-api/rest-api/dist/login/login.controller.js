"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LoginController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
let LoginController = exports.LoginController = LoginController_1 = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
        this.logger = new common_1.Logger(LoginController_1.name);
    }
    async logIn(req) {
        try {
            return this.loginService.logIn(req);
        }
        catch (error) {
            this.logger.error('[LOGIN]: ' + error);
        }
    }
    async refreshJwtToken(req) {
        try {
            return this.loginService.refreshToken(req);
        }
        catch (error) {
            this.logger.error('[REFRESHJWTTOKEN]: ' + error);
        }
    }
    async getProfile(username) {
        try {
            return this.loginService.findOne(username);
        }
        catch (error) {
            this.logger.error('[GETPROFILE]: ' + error);
        }
    }
    async getUserProfile(request) {
        try {
            return this.loginService.getUserProfile();
        }
        catch (error) {
            this.logger.error('[GETUSERPROFILE]: ' + error);
        }
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "logIn", null);
__decorate([
    (0, common_1.Post)('/refresh'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "refreshJwtToken", null);
__decorate([
    (0, common_1.Get)('/find/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getUserProfile", null);
exports.LoginController = LoginController = LoginController_1 = __decorate([
    (0, common_1.Controller)('/login'),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
//# sourceMappingURL=login.controller.js.map