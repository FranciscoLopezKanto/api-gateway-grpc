import { Observable } from "rxjs";
export declare const protobufPackage = "auth";
export interface Error {
    code: number;
    message: string;
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    token: string;
    refreshToken: string;
    id: string;
    name: string;
    email: string;
    error: Error | undefined;
}
export interface ValidateRequest {
    token: string;
    refreshToken: string;
}
export interface ValidateResponse {
    token?: string | undefined;
    refreshToken?: string | undefined;
    error: Error | undefined;
}
export declare const AUTH_PACKAGE_NAME = "auth";
export interface AuthServiceClient {
    login(request: LoginRequest): Observable<LoginResponse>;
    validate(request: ValidateRequest): Observable<ValidateResponse>;
}
export interface AuthServiceController {
    login(request: LoginRequest): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;
    validate(request: ValidateRequest): Promise<ValidateResponse> | Observable<ValidateResponse> | ValidateResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
