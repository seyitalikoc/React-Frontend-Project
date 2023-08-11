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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const context_service_1 = require("../login/context.service");
let JwtGuard = exports.JwtGuard = class JwtGuard {
    constructor(jwtService, contextService) {
        this.jwtService = jwtService;
        this.contextService = contextService;
    }
    canActivate(context) {
        try {
            const request = context.getArgs();
            const authorization = this.extractTokenFromHeader(request[0]);
            const temp = this.jwtService.verify(authorization, { secret: process.env.JWT_SECRET });
            const user = {
                name: temp.name,
                profession: temp.profession,
                username: temp.username,
                id: temp._id,
                eMail: temp.eMail,
                birthDate: temp.birthDate,
                IsActive: temp.IsActive,
                language: temp.language
            };
            this.contextService.setContext(user);
            return true;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNAUTHORIZED,
                error: 'You not have an access for it. Please login and enter the key or control the key.'
            }, common_1.HttpStatus.UNAUTHORIZED, {
                cause: error
            });
        }
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return token;
    }
};
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        context_service_1.ContextService])
], JwtGuard);
//# sourceMappingURL=jwt.guard.js.map