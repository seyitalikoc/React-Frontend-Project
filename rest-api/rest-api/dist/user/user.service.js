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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_providers_1 = require("./user.providers");
const user_dto_1 = require("./dto/user.dto");
let UserService = exports.UserService = UserService_1 = class UserService {
    constructor(userProviders) {
        this.userProviders = userProviders;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    findAll() {
        try {
            return this.userProviders.findAll();
        }
        catch (error) {
            this.logger.error('[FINDALL]: ' + error);
        }
    }
    findOneByID(id) {
        try {
            return this.userProviders.findOneByID(id);
        }
        catch (error) {
            this.logger.error('[FINDONEBYID]: ' + error);
        }
    }
    create(n_user) {
        try {
            return this.userProviders.create(n_user);
        }
        catch (error) {
            this.logger.error('[CREATE]: ' + error);
        }
    }
    patchUpdate(id, body) {
        try {
            return this.userProviders.patchUpdate(id, body);
        }
        catch (error) {
            this.logger.error('[PATCHUPDATE]: ' + error);
        }
    }
    ;
    putUpdate(id, body) {
        try {
            return this.userProviders.putUpdate(id, body);
        }
        catch (error) {
            this.logger.error('[PUTUPDATE]: ' + error);
        }
    }
    delete(id) {
        try {
            return this.userProviders.delete(id);
        }
        catch (error) {
            this.logger.error('[DELETE]: ' + error);
        }
    }
};
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "findOneByID", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "patchUpdate", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "putUpdate", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "delete", null);
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_providers_1.UserProviders])
], UserService);
//# sourceMappingURL=user.service.js.map