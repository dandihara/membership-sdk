import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './validation/env.validation';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import configration from './config/configration';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.config/${process.env.NODE_ENV}.yaml`,
      validate,
      isGlobal: true,
      load: [configration],
    }),
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
