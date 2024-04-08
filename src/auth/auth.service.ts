import { UserRepositoryService } from 'src/repository/service/userRepository.service';
import { LoginRequest } from './dto/auth.dto';
import { LoginType } from './dto/auth.enum';

export class AuthService {
  constructor(private userRepositoryService: UserRepositoryService) {}
  async login(body: LoginRequest) {
    if (body.type === LoginType.NORMAL) {
      const { email, password } = body;

      if (email === 'test@google.com' && password === '12345') {
        return true;
      }
    }
  }

  // 접속 유저 정보 확인
  async validateUserInfo(loginType: LoginType, loginRequest: LoginRequest) {
    if (loginType === LoginType.GOOGLE) {
      // 로그인 추가
    } else if (loginType === LoginType.NORMAL) {
      const result = await this.userRepositoryService.login(
        loginRequest.email,
        loginRequest.password,
      );

      return result;
    }
  }
}
