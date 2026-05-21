// src/controllers/opinion.controller.ts

import type { Request, Response } from "express";
import { OpinionService } from "./opinion.service";

const opinionService = new OpinionService();

export const createOpinion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = req.body;
    const opinion = await opinionService.createOpinion(data);
    res.status(201).json({
      success: true,
      data: opinion,
    });
  } catch (err: any) {
    if (err.code === 11000) {
      res.status(409).json({
        success: false,
        message: "You have already a opinion.", // from your unique index
      });
    } else if (err.name === "ValidationError") {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    } else {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

export const getMyOpinion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { bpNumber } = req.params;
    const opinion = await opinionService.getMyOpinion(bpNumber as string);
    if (!opinion) {
      res.status(404).json({ success: false, message: "Opinion not found." });
      return;
    }
    res.json({ success: true, data: opinion });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllOpinions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const opinions = await opinionService.getAllOpinions();
    res.json({ success: true, data: opinions });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const editMyOpinion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { bpNumber } = req.params;
    const update = req.body;

    const opinion = await opinionService.updateMyOpinion(bpNumber as string, update);
    if (!opinion) {
      res.status(404).json({ success: false, message: "Opinion not found." });
      return;
    }

    res.json({ success: true, data: opinion });
  } catch (err: any) {
    if (err.code === 11000) {
      res.status(409).json({
        success: false,
        message: "You have already a opinion.",
      });
    } else if (err.name === "ValidationError") {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    } else {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};