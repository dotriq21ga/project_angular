export interface FormLogin {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;
}

export interface Token {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
}