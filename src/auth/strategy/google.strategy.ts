import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-jwt';
import { Profile, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from "../auth.service";
import { LoginType } from "../dto/auth.enum";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
    ) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: 'email',
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<void> {
        const { emails, provider } = profile;

        const googleUserInfo = {
            email: emails[0].value,
            socialProvider: provider, // google 고정
            externalId: profile.id,
            accessToken,
            refreshToken,
        };

        await this.authService.validateUserInfo(LoginType.GOOGLE, googleUserInfo);
    }

    
}