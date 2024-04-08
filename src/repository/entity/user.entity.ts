import { MinLength } from 'class-validator';
import { LoginType } from 'src/auth/dto/auth.enum';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user')
@Unique(['nickname'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  email: string;

  @Column({ type: 'enum', enum: LoginType })
  loginType: LoginType;

  @Column('varchar', { length: 30 })
  @MinLength(8)
  password: string;

  @Column('varchar', { length: 50 })
  nickname: string;

  @Column('timestamptz')
  createdAt: Date;

  @Column('timestamptz')
  updatedAt: Date;
}
