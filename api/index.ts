import app from "../src/app";
import { connectDB } from "../src/app/config/db";

connectDB();

export default app;