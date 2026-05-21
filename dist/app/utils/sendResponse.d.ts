import type { Response } from "express";
interface IMeta {
    total: number;
}
interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
    meta?: IMeta;
}
export declare const sendRes: <T>(res: Response, data: IResponse<T>) => void;
export {};
//# sourceMappingURL=sendResponse.d.ts.map