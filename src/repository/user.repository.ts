import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserResiterDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  private userRepository: Repository<User>;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async register(registerDto: UserResiterDto) {
    await this.userRepository.create({
      email: registerDto.email,
      password: registerDto.password,
      nickname: registerDto.nickname,
    });
  }
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
