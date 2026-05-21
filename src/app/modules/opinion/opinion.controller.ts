import type { NextFunction, Request, Response } from "express";
import { OpinionServices } from "./opinion.service";
import statusCode from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendRes } from "../../utils/sendResponse";

const createOpinion = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const opinion = await OpinionServices.createOpinion(req.body);

  sendRes(res, {
    statusCode: statusCode.CREATED,
    success: true,
    message: "Opinion created Successfully",
    data: opinion,
  });
});

const getAllOpinion = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await OpinionServices.getAllOpinion();

  sendRes(res, {
    statusCode: statusCode.OK,
    success: true,
    message: "Opinions retrieved Successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getSingleOpinion = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { bpNumber } = req.params;
  const opinion = await OpinionServices.getSingleOpinion(bpNumber as string);

  sendRes(res, {
    statusCode: statusCode.OK,
    success: true,
    message: "Opinion retrieved Successfully",
    data: opinion,
  });
});

const updateOpinion = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { bpNumber } = req.params;
  const opinion = await OpinionServices.updateOpinion(bpNumber as string, req.body);

  sendRes(res, {
    statusCode: statusCode.OK,
    success: true,
    message: "Opinion updated Successfully",
    data: opinion,
  });
});

const deleteOpinion = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { bpNumber } = req.params;
  const opinion = await OpinionServices.deleteOpinion(bpNumber as string);

  sendRes(res, {
    statusCode: statusCode.OK,
    success: true,
    message: "Opinion deleted Successfully",
    data: opinion,
  });
});

export const OpinionController = {
  createOpinion,
  getAllOpinion,
  getSingleOpinion,
  updateOpinion,
  deleteOpinion,
};
