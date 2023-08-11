"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const app_controller_1 = require("./app.controller");
const app_services_1 = require("./app.services");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/entity/user.entity");
const config_1 = require("@nestjs/config");
const login_module_1 = require("./login/login.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, login_module_1.LoginModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '5432',
                database: 'localweb',
                entities: [user_entity_1.User],
                synchronize: true,
                autoLoadEntities: true,
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_services_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map