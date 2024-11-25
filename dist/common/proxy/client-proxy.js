"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientProxyUsers = void 0;
const microservices_1 = require("@nestjs/microservices");
const dotenv = require("dotenv");
dotenv.config();
const users_pb_1 = require("../../users/users.pb");
const clientProxyUsers = () => {
    return microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.GRPC,
        options: {
            url: "localhost:50051",
            package: users_pb_1.USERS_PACKAGE_NAME,
            protoPath: 'node_modules/myprotos/protos/users.proto',
        },
    });
};
exports.clientProxyUsers = clientProxyUsers;
//# sourceMappingURL=client-proxy.js.map