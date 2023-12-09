import { IsOptional, IsString, IsDefined } from "class-validator";

export class RegisterRequest {
    @IsString()
    @IsDefined()
    email: string;

    @IsString()
    @IsOptional()
    password?: string; 
    
    @IsString()
    @IsOptional()
    nickname?: string;
}
