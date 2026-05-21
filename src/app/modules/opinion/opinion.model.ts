// models/opinion.ts

import mongoose from "mongoose";
import type { IOpinion } from "./opinion.interface";

const { Schema, model, Types } = mongoose;

// BP custom validator
const bpValidator = {
  validator: (value: string): boolean => {
    const v = (value || "").toUpperCase().trim();

    // Must be 12 characters: BPXXXXX...
    if (!/^BP\d{10}$/.test(v)) return false;

    // Must have "20" at positions 5 and 6 (0‑indexed: index 4,5)
    const batchCode = v.slice(4, 6);
    return batchCode === "20";
  },
  message: (props: any) => {
    const v = (props.value || "").toUpperCase().trim();
    if (/^BP\d{10}$/.test(v)) {
      const batchCode = v.slice(4, 6);
      if (batchCode !== "20") {
        return "You are not member of 2020 batch.";
      }
    }
    return `${props.value} is not a valid BP Number`;
  },
};

const OpinionSchema = new Schema<IOpinion>(
  {
    name: { type: String, required: true, trim: true, maxlength: [30, "Max length is 30 character."] },
    bpNumber: {
      type: String,
      required: true,
      unique: [true, "You have already a opinion with this BP Number."],
      validate: bpValidator,
      set: (value: string): string => {
        // Normalize value on save
        const v = (value || "").trim();

        if (/^\d{10}$/.test(v)) {
          // 10 digits → add BP prefix
          return "BP" + v;
        }
        // Already has BP prefix → uppercase
        return v.toUpperCase();
      },
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
      unique: [true, "You have already a opinion this email."],
      sparse: true,
    },
    phone: {
      type: String,
      trim: true,
      unique: [true, "You have already a opinion with this phone number."],
      sparse: true,
      validate: {
        validator: (val: string | undefined) => val == null || /^01[2-9]\d{8}$/.test(val),
        message: "Phone must be 11 digit a valid mobile number.",
      },
    },
    workstation: { type: String, trim: true, maxlength: [50, "Max length is 50 character."] },
    websiteName: { type: String, trim: true, maxlength: [30, "Max length is 30 character."] },
    features: {
      type: [String],
      default: [],
      validate: { validator: (arr: string[]) => Array.isArray(arr), message: "Features must be an array of strings" },
    },
    comments: { type: String, trim: true, maxlength: [1000, "Max length is 50 character."] },
  },
  { timestamps: true, versionKey: false },
);

// Optional indexes; adjust as needed
OpinionSchema.index({ bp: 1 }, { sparse: true });
OpinionSchema.index({ createdAt: -1 });

// export type OpinionDocument = mongoose.InferSchemaType<typeof OpinionSchema> & {
//   _id: mongoose.Types.ObjectId;
// };

export const MOpinion = model("Opinion", OpinionSchema);
