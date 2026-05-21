import { Router } from "express";
import { createOpinion, getMyOpinion, getAllOpinions, editMyOpinion } from "./opinion.controller";

const router = Router();

// POST: submit an opinion
router.post("/", createOpinion);

// GET: my opinion by bpNumber
router.get("/my/:bpNumber", getMyOpinion);

// GET: all opinions (for admin)
router.get("/all", getAllOpinions);

// PUT: edit my opinion by bpNumber
router.put("/my/:bpNumber", editMyOpinion);

export const opinionRouter =router;
