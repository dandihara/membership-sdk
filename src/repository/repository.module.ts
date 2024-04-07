import { Module } from '@nestjs/common';
import { UserRepositoryService } from './service/userRepository.service';

@Module({
    exports: [UserRepositoryService,]
})
export class RepositoryModule {}