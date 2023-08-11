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
var LoginProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginProvider = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entity/user.entity");
let LoginProvider = exports.LoginProvider = LoginProvider_1 = class LoginProvider {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(LoginProvider_1.name);
    }
    async findOneByName(username) {
        try {
            const person = await this.userRepository.findOneOrFail({ where: { username: username } });
            const user = {
                name: person.name,
                profession: person.profession,
                username: person.username,
                id: person.id,
                eMail: person.eMail,
                birthDate: person.birthDate,
                IsActive: person.IsActive,
                language: person.language
            };
            return user;
        }
        catch (error) {
            this.logger.error('[FINDONE]: ' + error);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'User not found.'
            }, common_1.HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }
    async findOneWithUsername(username) {
        try {
            const person = await this.userRepository.findOneOrFail({ where: { username: username } });
            return person;
        }
        catch (error) {
            this.logger.error('[FINDONE]: ' + error);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'User not found.'
            }, common_1.HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }
};
exports.LoginProvider = LoginProvider = LoginProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [Function])
], LoginProvider);
//# sourceMappingURL=login.provider.js.map