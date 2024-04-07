import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get('db');
        return {
          type: 'postgres',
          host: dbConfig.DATABASE_HOST,
          port: dbConfig.DATABASE_PORT,
          username: dbConfig.DATABASE_USER,
          database: dbConfig.DATABASE_NAME,
          password: dbConfig.DATABASE_PASSWORD,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
