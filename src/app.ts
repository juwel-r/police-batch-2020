import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { OpinionRouter } from "./app/modules/opinion/opinion.route";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://juwel-r.web.app", "http://localhost:5173"],
    credentials: true,
  }),
);
app.use("/api/opinion", OpinionRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Backend Server of 2020 Police Batch is okay.");
});

app.use(globalErrorHandler);

app.use((req, res) => {
  res.send("Route not found");
});

export default app;
