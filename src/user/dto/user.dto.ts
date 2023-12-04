import { IsOptional, IsString } from "class-validator";

export class RegisterRequest {
    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    password?: string; 
}
