import { RegisterRequest } from "./dto/user.dto";
import { UserRepositoryService } from "src/repository/service/userRepository.service";

export class UserService {
    constructor (
        // private userRepositoryService: UserRepositoryService,
    ){}
    async registerUser(params: RegisterRequest): Promise<void> {
        const { email, password } = params;

        // await this.userRepositoryService.register(email, password);
        return 
    }
}