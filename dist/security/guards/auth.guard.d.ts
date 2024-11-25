import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    canActivate(ctx: ExecutionContext): Promise<boolean> | never;
}
