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
var UserProviders_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProviders = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const user_dto_1 = require("./dto/user.dto");
let UserProviders = exports.UserProviders = UserProviders_1 = class UserProviders {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(UserProviders_1.name);
    }
    async findAll() {
        try {
            const temp = await this.userRepository.find();
            const values = temp.map(({ password, ...e }) => e);
            return values;
        }
        catch (error) {
            this.logger.error('[FINDALL]: ' + error);
        }
    }
    async findOneByID(id) {
        try {
            const person = await this.userRepository.findOneOrFail({ where: { id: id } });
            delete person.password;
            return person;
        }
        catch (error) {
            this.logger.error('[FINDONE]: ' + error);
            return 'App didn\'t find user: ' + id;
        }
    }
    async findOneByName(name) {
        try {
            const person = await this.userRepository.findOneOrFail({ where: { name: name } });
            delete person.password;
            return person;
        }
        catch (error) {
            this.logger.error('[FINDONE]: ' + error);
            return 'App didn\'t find user: ' + name;
        }
    }
    async create(n_user) {
        try {
            const person = await this.userRepository.findOne({ where: { username: n_user.username } });
            if (person === null) {
                const user = this.userRepository.create(n_user);
                return await this.userRepository.save(user);
            }
            else {
                return this.logger.error('This username is using. Enter another username.');
            }
        }
        catch (error) {
            this.logger.error('[CREATE]: ' + error);
        }
    }
    async patchUpdate(id, body) {
        try {
            const person = await this.userRepository.findOneOrFail({ where: { id: id } });
            body.id = id;
            this.userRepository.update({ id: id }, body);
            return await this.findOneByID(id);
        }
        catch (error) {
            this.logger.error('[PATCHUSER]: ' + error);
            return 'user didn\'t found.';
        }
    }
    async putUpdate(id, body) {
        try {
            const user = await this.userRepository.findOneOrFail({ where: { id: id } });
            const temp = { id: 1, name: 'name', password: 'password', profession: 'profession' };
            const bodykeys = Object.keys(body);
            const tempkeys = Object.keys(temp);
            let difference = tempkeys.filter(x => !bodykeys.includes(x));
            if (difference.length != 0) {
                return 'Some informations are empty.';
            }
            body.id = id;
            this.userRepository.update({ id: id }, body);
            return await this.findOneByID(id);
        }
        catch (error) {
            this.logger.error('[PUTUSER]: ' + error);
            return 'user didn\'t found.';
        }
    }
    async delete(id) {
        try {
            if (!this.findOneByID(id)) {
                return 'user didn\'t find.';
            }
            this.userRepository.delete({ id: id });
            return 'user deleted.';
        }
        catch (error) {
            this.logger.error('[DELETE]: ' + error);
        }
    }
};
__decorate([
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserProviders.prototype, "patchUpdate", null);
exports.UserProviders = UserProviders = UserProviders_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [Function])
], UserProviders);
//# sourceMappingURL=user.providers.js.map