import { z } from "zod";

const bpNumberSchema = z
  .string()
  .trim()
  .transform((val) => val.toUpperCase())
  .refine(
    (val) => {
      let normalized = val;

      if (/^\d{10}$/.test(normalized)) {
        normalized = "BP" + normalized;
      }

      return /^BP\d{10}$/.test(normalized) && normalized.slice(4, 6) === "20";
    },
    {
      message: "BP Number must be valid and belong to 2020 batch.",
    },
  );

export const createOpinionZod = z.object({
  name: z.string().trim().min(1, "Name is required").max(30, "Max length is 30 character."),
  bpNumber: bpNumberSchema,
  email: z.string().trim().email("Invalid email address").optional(),
  phone: z
    .string()
    .trim()
    .regex(/^01[2-9]\d{8}$/, "Phone must be 11 digit a valid mobile number.")
    .optional(),
  workstation: z.string().trim().max(50, "Max length is 50 character.").optional(),
  websiteName: z.string().trim().max(30, "Max length is 30 character.").optional(),
  features: z.array(z.string().trim()).optional().default([]),
  comments: z.string().trim().max(1000, "Max length is 1000 character.").optional(),
});

export const updateOpinionZod = z.object({
  name: z.string().trim().min(1, "Name is required").max(30, "Max length is 30 character.").optional(),
  email: z.string().trim().email("Invalid email address").optional(),
  phone: z
    .string()
    .trim()
    .regex(/^01[2-9]\d{8}$/, "Phone must be 11 digit a valid mobile number.")
    .optional(),
  workstation: z.string().trim().max(50, "Max length is 50 character.").optional(),
  websiteName: z.string().trim().max(30, "Max length is 30 character.").optional(),
  features: z.array(z.string().trim()).optional(),
  comments: z.string().trim().max(1000, "Max length is 1000 character.").optional(),
});
