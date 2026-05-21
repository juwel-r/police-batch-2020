import mongoose from "mongoose";
import { envVar } from "./env.config";

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(envVar.DB_URL);
};