"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVar = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loadEnvVars = () => {
    const requiredEnvVar = [
        "PORT",
        "DB_URL",
        "NODE_ENV",
        // "JWT_ACCESS_SECRET",
        // "JWT_ACCESS_EXPIRES",
        // "BCRYPT_SALT_ROUND",
        // "JWT_REFRESH_SECRET",
        // "JWT_REFRESH_EXPIRES",
        // "CLOUDINARY_API_KEY",
        // "CLOUDINARY_API_SECRET",
        // "CLOUDINARY_CLOUD_NAME",
        // "SMTP_HOST",
        // "SMTP_PORT",
        // "SMTP_USER",
        // "SMTP_PASS",
        // "SMTP_FROM",
        // "FRONTEND_URL",
    ];
    requiredEnvVar.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`${key} is missing form .env`);
        }
    });
    return {
        PORT: process.env.PORT,
        DB_URL: process.env.DB_URL,
        NODE_ENV: process.env.NODE_ENV,
        // JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
        // JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
        // BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
        // JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
        // JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES as string,
        // CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
        // CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,
        // CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
        // SMTP_HOST: process.env.SMTP_HOST as string,
        // SMTP_PORT: process.env.SMTP_PORT as string,
        // SMTP_USER: process.env.SMTP_USER as string,
        // SMTP_PASS: process.env.SMTP_PASS as string,
        // SMTP_FROM: process.env.SMTP_FROM as string,
        // FRONTEND_URL: process.env.FRONTEND_URL as string,
    };
};
exports.envVar = loadEnvVars();
//# sourceMappingURL=env.config.js.map