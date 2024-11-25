import { GetUsersResponse, GetUserByIdRequest, GetUserByIdResponse, CreateUserRequest, CreateUserResponse, UpdateUserRequest, UpdateUserResponse, DeleteUserRequest, DeleteUserResponse } from './users.pb';
export declare class UsersService {
    private users;
    getUsers(): GetUsersResponse;
    getUserById(data: GetUserByIdRequest): GetUserByIdResponse;
    createUser(data: CreateUserRequest): CreateUserResponse;
    updateUser(data: UpdateUserRequest): UpdateUserResponse;
    deleteUser(data: DeleteUserRequest): DeleteUserResponse;
}
