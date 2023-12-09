import { LoginRequest } from "./dto/auth.dto";
import { LoginType } from "./dto/auth.enum";

export class AuthService {
    async login(body: LoginRequest) {
        // 일반 로그인 
        if( body.type === LoginType.NORMAL ) {            
            const { email, password } = body;
            
            if( email === 'test@gmail.com' && password === '12345' ){
                return true;
            }

        }
        // 소셜 로그인 처리
    }
}