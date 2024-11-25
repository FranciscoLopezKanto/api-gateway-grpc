import { OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import type { GetUsersRequest, GetUsersResponse, GetUserByIdRequest, GetUserByIdResponse, CreateUserRequest, CreateUserResponse, UpdateUserRequest, UpdateUserResponse, DeleteUserRequest, DeleteUserResponse } from './users.pb';
export declare class UsersService implements OnModuleInit {
    private readonly usersServiceClient;
    private usersService;
    constructor(usersServiceClient: ClientGrpcProxy);
    onModuleInit(): void;
    getUsers(request: GetUsersRequest): Promise<GetUsersResponse>;
    getUserById(request: GetUserByIdRequest): Promise<GetUserByIdResponse>;
    createUser(request: CreateUserRequest): Promise<CreateUserResponse>;
    updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
    deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse>;
}
