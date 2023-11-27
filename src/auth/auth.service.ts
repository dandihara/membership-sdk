import { LoginRequest } from "./dto/auth.dto";
import { LoginType } from "./dto/auth.enum";

export class AuthService {
    async login(body: LoginRequest) {
        // 일반 로그인 
        if( body.type === LoginType.NORMAL ) {            
            const { id, password } = body;
            
            if( id === 'admin' && password === '12345' ){
                return true;
            }

        }
        // 소셜 로그인 처리
    }
}