interface ResponseSingleType<T> {
    result: T;
}

interface ResponseArrayType<T> {
    results: T[];
}

interface RequestFormat<T> {
    parameters: T;
}


class User {
    email: string;
    password: string;
}

export class LoginRequestDto implements RequestFormat<User> {
    parameters: User;
}
