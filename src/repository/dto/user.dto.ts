import { IsString } from 'class-validator';

export class UserResiterDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  nickname: string;
}
