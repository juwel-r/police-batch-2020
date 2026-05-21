import { z } from "zod";
export declare const createOpinionZod: z.ZodObject<{
    name: z.ZodString;
    bpNumber: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    workstation: z.ZodOptional<z.ZodString>;
    websiteName: z.ZodOptional<z.ZodString>;
    features: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    comments: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateOpinionZod: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    workstation: z.ZodOptional<z.ZodString>;
    websiteName: z.ZodOptional<z.ZodString>;
    features: z.ZodOptional<z.ZodArray<z.ZodString>>;
    comments: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=opinion.validation.d.ts.map