"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOpinionZod = exports.createOpinionZod = void 0;
const zod_1 = require("zod");
const bpNumberSchema = zod_1.z
    .string()
    .trim()
    .transform((val) => val.toUpperCase())
    .refine((val) => {
    let normalized = val;
    if (/^\d{10}$/.test(normalized)) {
        normalized = "BP" + normalized;
    }
    return /^BP\d{10}$/.test(normalized) && normalized.slice(4, 6) === "20";
}, {
    message: "BP Number must be valid and belong to 2020 batch.",
});
exports.createOpinionZod = zod_1.z.object({
    name: zod_1.z.string().trim().min(1, "Name is required").max(30, "Max length is 30 character."),
    bpNumber: bpNumberSchema,
    email: zod_1.z.string().trim().email("Invalid email address").optional(),
    phone: zod_1.z
        .string()
        .trim()
        .regex(/^01[2-9]\d{8}$/, "Phone must be 11 digit a valid mobile number.")
        .optional(),
    workstation: zod_1.z.string().trim().max(50, "Max length is 50 character.").optional(),
    websiteName: zod_1.z.string().trim().max(30, "Max length is 30 character.").optional(),
    features: zod_1.z.array(zod_1.z.string().trim()).optional().default([]),
    comments: zod_1.z.string().trim().max(1000, "Max length is 1000 character.").optional(),
});
exports.updateOpinionZod = zod_1.z.object({
    name: zod_1.z.string().trim().min(1, "Name is required").max(30, "Max length is 30 character.").optional(),
    email: zod_1.z.string().trim().email("Invalid email address").optional(),
    phone: zod_1.z
        .string()
        .trim()
        .regex(/^01[2-9]\d{8}$/, "Phone must be 11 digit a valid mobile number.")
        .optional(),
    workstation: zod_1.z.string().trim().max(50, "Max length is 50 character.").optional(),
    websiteName: zod_1.z.string().trim().max(30, "Max length is 30 character.").optional(),
    features: zod_1.z.array(zod_1.z.string().trim()).optional(),
    comments: zod_1.z.string().trim().max(1000, "Max length is 1000 character.").optional(),
});
//# sourceMappingURL=opinion.validation.js.map