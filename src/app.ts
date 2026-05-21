import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "",
    credentials: true,
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send("Backend Server of 2020 Police Batch is okay.");
});

app.use(globalErrorHandler);

app.use((req, res) => {
  res.send("Route not found");
});

export default app;
