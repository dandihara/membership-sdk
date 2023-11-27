import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from './dto/auth.dto';

@Controller('')
export class AuthController {
    constructor (
        private authSerivce: AuthService,
    ) {}

    @Post('')
    async login (body: LoginRequest) {
        return await this.authSerivce.login(body);
    }
}