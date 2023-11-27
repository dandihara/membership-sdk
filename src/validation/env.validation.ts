import { plainToClass } from "class-transformer";
import { IsEnum, IsString, validateSync } from "class-validator"

enum Enviorment {
    Dev = 'dev',
    Prod = 'prod',
}

// 실행 시, Validate 필요한 목록
class EnvironmentValues {
    @IsEnum(Enviorment)
    NODE_ENV: Enviorment;

    // TODO : 추후, membership list 필요
    @IsString()
    MEMBERSHIP_NAME: string;
}

// run 혹은 build 시, 실행 인자 Validation
export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToClass(
        EnvironmentValues,
        config,
        { enableImplicitConversion: true },
    );

    const error = validateSync(validatedConfig, { skipMissingProperties: false });

    if(error.length > 0) {
        throw new Error(error.toString());
    }

    return validatedConfig;
}