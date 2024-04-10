import {
  IsString,
  IsEnum,
  IsDefined,
  IsOptional,
  IsEmail,
} from 'class-validator';
import { LoginType } from './auth.enum';

export class LoginRequest {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  password: string;

  @IsOptional()
  @IsEnum(LoginType)
  type?: LoginType;

  @IsOptional()
  @IsString()
  token?: string;
}

export class RegisterRequest {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  password: string;

  @IsDefined()
  @IsString()
  nickname: string;
}
