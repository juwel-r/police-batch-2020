import type { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
export declare const zodValidation: (zodSchema: ZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=zodValidation.d.ts.map