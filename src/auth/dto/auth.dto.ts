import { IsString, IsEnum,IsDefined } from 'class-validator';
import { LoginType } from './auth.enum';

export class LoginRequest {
    @IsDefined()
    @IsEnum(LoginType)
    type: LoginType;
    
    @IsString()
    id?: string;

    @IsString()
    password?: string;

    @IsString()
    token?: string;
}