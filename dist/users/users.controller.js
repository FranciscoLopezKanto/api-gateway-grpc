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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const users_pb_1 = require("./users.pb");
let UsersController = class UsersController {
    constructor(usersServiceClient) {
        this.usersServiceClient = usersServiceClient;
    }
    onModuleInit() {
        this.usersService =
            this.usersServiceClient.getService(users_pb_1.USERS_SERVICE_NAME);
    }
    async register(req) {
        return (0, rxjs_1.firstValueFrom)(this.usersService.register(req));
    }
    async login(req) {
        return (0, rxjs_1.firstValueFrom)(this.usersService.login(req));
    }
    async getUsers(authorization) {
        const token = (authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1]) || '';
        if (!token) {
            throw new Error('Token de autenticación no proporcionado');
        }
        const request = { token };
        return (0, rxjs_1.firstValueFrom)(this.usersService.getUsers(request));
    }
    async getUserById(id, req) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            throw new Error('Token de autenticación no proporcionado');
        }
        const request = { id };
        return (0, rxjs_1.firstValueFrom)(this.usersService.getUserById(request));
    }
    async updateUser(id, user, req) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            throw new Error('Token de autenticación no proporcionado');
        }
        const request = {
            user: Object.assign({ id }, user),
        };
        return (0, rxjs_1.firstValueFrom)(this.usersService.updateUser(request));
    }
    async deleteUser(id, req) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            throw new Error('Token de autenticación no proporcionado');
        }
        const request = { id };
        return (0, rxjs_1.firstValueFrom)(this.usersService.deleteUser(request));
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __param(0, (0, common_1.Inject)('UsersServiceClient')),
    __metadata("design:paramtypes", [microservices_1.ClientGrpcProxy])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map