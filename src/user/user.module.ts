import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RepositoryModule } from 'src/repository/repository.module';
import { UserRepositoryService } from 'src/repository/service/userRepository.service';

@Module({
    imports: [RepositoryModule],
    controllers: [UserController],
    providers: [UserService, UserRepositoryService],
    exports: [UserService]
})
export class UserModule {}