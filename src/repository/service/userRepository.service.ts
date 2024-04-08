import { UserRepository } from '../user.repository';

export class UserRepositoryService {
  constructor(private userRepository: UserRepository) {}

  async login(email: string, password: string) {
    const result = await this.userRepository.findUserByEmail(email);

    if (!result) {
      return '등록되지 않은 유저입니다.';
    }

    if (result[0].password !== password) {
      return '비밀번호를 확인하시기 바랍니다.';
    }

    return '000000000000000'; // token 생성.
  }

  // password 암호화 처리
  async register(email: string, password: string, nickname: string) {
    await this.userRepository.register({ email, password, nickname });
  }
}
