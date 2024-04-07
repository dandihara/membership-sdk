import { LoginRequest } from './dto/auth.dto';
import { LoginType } from './dto/auth.enum';

export class AuthService {
  async login(body: LoginRequest) {
    if (body.type === LoginType.NORMAL) {
      const { email, password } = body;

      if (email === 'test@google.com' && password === '12345') {
        return true;
      }
    }
  }

  // 접속 유저 정보 확인
  async validateUserInfo(loginType: LoginType, userInfo: Object) {
    if (loginType === LoginType.GOOGLE) {
    }
  }
}
