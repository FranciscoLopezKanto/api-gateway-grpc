/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "users";

export interface User {
  id: string;
  /** Nombre del usuario */
  name: string;
  /** Correo electrónico del usuario */
  email: string;
  /** Rol del usuario (por ejemplo, "admin", "user") */
  role: string;
  /** Fecha de creación */
  createdAt: string;
}

export interface RegisterRequest {
  /** Nombre del usuario */
  name: string;
  /** Correo electrónico del usuario */
  email: string;
  /** Contraseña del usuario */
  password: string;
  /** Rol del usuario (opcional, podría ser "user" por defecto) */
  role: string;
}

export interface RegisterResponse {
  /** Usuario registrado */
  user:
    | User
    | undefined;
  /** Mensaje de éxito o información adicional */
  message: string;
}

export interface LoginRequest {
  /** Correo electrónico para login */
  email: string;
  /** Contraseña para login */
  password: string;
}

export interface LoginResponse {
  /** Token de autenticación */
  token: string;
}

export interface GetUsersRequest {
  /** Token de autenticación */
  token: string;
}

export interface GetUsersResponse {
  users: User[];
}

export interface GetUserByIdRequest {
  /** ID del usuario a buscar */
  id: string;
}

export interface GetUserByIdResponse {
  user: User | undefined;
}

export interface UpdateUserRequest {
  /** Datos actualizados del usuario */
  user: User | undefined;
}

export interface UpdateUserResponse {
  /** Usuario actualizado */
  user: User | undefined;
}

export interface DeleteUserRequest {
  /** ID del usuario a eliminar */
  id: string;
}

export interface DeleteUserResponse {
  /** ID del usuario eliminado */
  id: string;
}

export const USERS_PACKAGE_NAME = "users";

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

  getUserById(
    request: GetUserByIdRequest,
  ): Promise<GetUserByIdResponse> | Observable<GetUserByIdResponse> | GetUserByIdResponse;

  updateUser(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> | Observable<UpdateUserResponse> | UpdateUserResponse;

  deleteUser(
    request: DeleteUserRequest,
  ): Promise<DeleteUserResponse> | Observable<DeleteUserResponse> | DeleteUserResponse;
}

export function UsersControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["register", "login", "getUsers", "getUserById", "updateUser", "deleteUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("Users", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("Users", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "Users";
