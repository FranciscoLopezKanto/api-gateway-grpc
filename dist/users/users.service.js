"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    getUsers() {
        return { users: this.users };
    }
    getUserById(data) {
        const user = this.users.find(u => u.id === data.id);
        return { user: user || undefined };
    }
    createUser(data) {
        this.users.push(data.user);
        return { user: data.user };
    }
    updateUser(data) {
        const index = this.users.findIndex(u => u.id === data.user.id);
        if (index !== -1) {
            this.users[index] = data.user;
            return { user: data.user };
        }
        return { user: undefined };
    }
    deleteUser(data) {
        this.users = this.users.filter(u => u.id !== data.id);
        return { id: data.id };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map