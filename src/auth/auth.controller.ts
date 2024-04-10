import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest, RegisterRequest } from './dto/auth.dto';
import { UserRepositoryService } from 'src/repository/service/userRepository.service';

@Controller('')
export class AuthController {
  constructor(
    private authSerivce: AuthService,
    private userRepositoryService: UserRepositoryService,
  ) {}

  @Post('')
  async login(body: LoginRequest) {
    if (body.token) {
      // 소셜 로그인
      return;
    }

    return await this.authSerivce.login(body);
  }

  @Post('register')
  async register(body: RegisterRequest) {
    await this.userRepositoryService.register({
      email: body.email,
      password: body.password,
      nickname: body.nickname,
    });
  }
}
