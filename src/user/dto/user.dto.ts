import { IsDefined, IsString } from "class-validator";

export class RegisterRequest {
    @IsString()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    password: string;

    @IsString()
    @IsDefined()
    nickname: string;
}
