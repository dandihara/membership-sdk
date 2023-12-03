import { RegisterRequest } from "./dto/user.dto";

export class UserService {
    constructor (
        private userRepositoryService: UserRepositoryService,
    ){}
    async registerUser(params: RegisterRequest): Promise<void> {
        const { email, password, nickname } = params;

        await this.userRepositoryService.register(email, password, nickname);
        return 
    }
}