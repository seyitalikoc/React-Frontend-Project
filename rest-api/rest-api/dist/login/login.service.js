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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var LoginService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const login_provider_1 = require("./login.provider");
const context_service_1 = require("./context.service");
const jwt_1 = require("@nestjs/jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let LoginService = exports.LoginService = LoginService_1 = class LoginService {
    constructor(loginProvider, contextService, jwtService) {
        this.loginProvider = loginProvider;
        this.contextService = contextService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(LoginService_1.name);
    }
    async logIn(req) {
        try {
            const user = await this.loginProvider.findOneWithUsername(req.body.username);
            if (user['password'] !== req.body.password) {
                throw new common_1.HttpException('Username or password is wrong!!!', common_1.HttpStatus.FORBIDDEN);
            }
            else {
                return {
                    access_token: this.jwtService.sign({
                        name: user['name'],
                        profession: user['profession'],
                        username: user['username'],
                        _id: user['id']
                    }, {
                        secret: process.env.JWT_SECRET,
                        expiresIn: '15m'
                    }),
                    refresh_token: this.jwtService.sign({
                        name: user['name'],
                        profession: user['profession'],
                        username: user['username'],
                        _id: user['id']
                    }, {
                        secret: process.env.JWT_REFRESH_SECRET,
                        expiresIn: '1h'
                    })
                };
            }
        }
        catch (error) {
            this.logger.error('[SIGNIN] ' + error);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'Username or password is wrong!!!'
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    async refreshToken(req) {
        try {
            if (jsonwebtoken_1.default.verify((req.body.headers.authorization).split(' ')[1], process.env.JWT_REFRESH_SECRET)) {
                const user = jsonwebtoken_1.default.verify((req.body.headers.authorization).split(' ')[1], process.env.JWT_REFRESH_SECRET);
                return {
                    access_token: this.jwtService.sign({
                        name: user['name'],
                        profession: user['profession'],
                        username: user['username'],
                        _id: user['_id']
                    }, {
                        secret: process.env.JWT_SECRET,
                        expiresIn: '15m'
                    }),
                };
            }
        }
        catch (error) {
            this.logger.error('[REFRESHTOKEN] ' + error);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNAUTHORIZED,
                error: 'You not have an access for it. Please login and enter the key, or control the key.'
            }, common_1.HttpStatus.UNAUTHORIZED, {
                cause: error
            });
        }
    }
    async findOne(username) {
        try {
            return this.loginProvider.findOneByName(username);
        }
        catch (error) {
            this.logger.error('[FINDONE] ' + error);
        }
    }
    async getUserProfile() {
        try {
            return this.contextService.getContext();
        }
        catch (error) {
            this.logger.error('[GETUSERPROFILE] ' + error);
        }
    }
};
__decorate([
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginService.prototype, "logIn", null);
__decorate([
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginService.prototype, "refreshToken", null);
exports.LoginService = LoginService = LoginService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [login_provider_1.LoginProvider,
        context_service_1.ContextService,
        jwt_1.JwtService])
], LoginService);
//# sourceMappingURL=login.service.js.map