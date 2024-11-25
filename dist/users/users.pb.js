"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_SERVICE_NAME = exports.UsersControllerMethods = exports.USERS_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "users";
exports.USERS_PACKAGE_NAME = "users";
function UsersControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["register", "login", "getUsers", "getUserById", "updateUser", "deleteUser"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("Users", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("Users", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.UsersControllerMethods = UsersControllerMethods;
exports.USERS_SERVICE_NAME = "Users";
//# sourceMappingURL=users.pb.js.map