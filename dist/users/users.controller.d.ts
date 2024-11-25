import { OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { Request } from 'express';
import type { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse, GetUsersResponse, GetUserByIdResponse, UpdateUserRequest, UpdateUserResponse, DeleteUserResponse } from './users.pb';
export declare class UsersController implements OnModuleInit {
    private readonly usersServiceClient;
    constructor(usersServiceClient: ClientGrpcProxy);
    private usersService;
    onModuleInit(): void;
    register(req: RegisterRequest): Promise<RegisterResponse>;
    login(req: LoginRequest): Promise<LoginResponse>;
    getUsers(authorization?: string): Promise<GetUsersResponse>;
    getUserById(id: string, req: Request): Promise<GetUserByIdResponse>;
    updateUser(id: string, user: Omit<UpdateUserRequest['user'], 'id'>, req: Request): Promise<UpdateUserResponse>;
    deleteUser(id: string, req: Request): Promise<DeleteUserResponse>;
}
