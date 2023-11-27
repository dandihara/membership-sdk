import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './validation/env.validation';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      validate,
    }),
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
