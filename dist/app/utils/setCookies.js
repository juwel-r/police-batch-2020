"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookieAuth = void 0;
const setCookieAuth = (res, token) => {
    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000,
        });
    }
    if (token.refreshToken) {
        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000, // this will not vanish even close the browser
        });
    }
};
exports.setCookieAuth = setCookieAuth;
//# sourceMappingURL=setCookies.js.map