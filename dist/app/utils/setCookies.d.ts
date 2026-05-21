import type { Response } from "express";
interface IToken {
    accessToken?: string;
    refreshToken?: string;
}
export declare const setCookieAuth: (res: Response, token: IToken) => void;
export {};
//# sourceMappingURL=setCookies.d.ts.map