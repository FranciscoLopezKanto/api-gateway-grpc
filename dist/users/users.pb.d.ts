import { Observable } from "rxjs";
export declare const protobufPackage = "users";
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}
export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface RegisterResponse {
    user: User | undefined;
    message: string;
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    token: string;
}
export interface GetUsersRequest {
    token: string;
}
export interface GetUsersResponse {
    users: User[];
}
export interface GetUserByIdRequest {
    id: string;
}
export interface GetUserByIdResponse {
    user: User | undefined;
}
export interface UpdateUserRequest {
    user: User | undefined;
}
export interface UpdateUserResponse {
    user: User | undefined;
}
export interface DeleteUserRequest {
    id: string;
}
export interface DeleteUserResponse {
    id: string;
}
export declare const USERS_PACKAGE_NAME = "users";
export interface UsersClient {
    register(request: RegisterRequest): Observable<RegisterResponse>;
    login(request: LoginRequest): Observable<LoginResponse>;
    getUsers(request: GetUsersRequest): Observable<GetUsersResponse>;
    getUserById(request: GetUserByIdRequest): Observable<GetUserByIdResponse>;
    updateUser(request: UpdateUserRequest): Observable<UpdateUserResponse>;
    deleteUser(request: DeleteUserRequest): Observable<DeleteUserResponse>;
}
export interface UsersController {
    register(request: RegisterRequest): Promise<RegisterResponse> | Observable<RegisterResponse> | RegisterResponse;
    login(request: LoginRequest): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;
    getUsers(request: GetUsersRequest): Promise<GetUsersResponse> | Observable<GetUsersResponse> | GetUsersResponse;
    getUserById(request: GetUserByIdRequest): Promise<GetUserByIdResponse> | Observable<GetUserByIdResponse> | GetUserByIdResponse;
    updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> | Observable<UpdateUserResponse> | UpdateUserResponse;
    deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> | Observable<DeleteUserResponse> | DeleteUserResponse;
}
export declare function UsersControllerMethods(): (constructor: Function) => void;
export declare const USERS_SERVICE_NAME = "Users";
