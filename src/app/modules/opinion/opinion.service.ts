import type { IOpinion } from "./opinion.interface";
import { MOpinion } from "./opinion.model";

const createOpinion = async (payload: IOpinion) => {
  const opinion = await MOpinion.create(payload);
  return opinion;
};

const getAllOpinion = async () => {
  const allOpinion = await MOpinion.find().sort({ createdAt: -1 });
  const totalOpinion = await MOpinion.countDocuments();
  return { data: allOpinion, meta: { total: totalOpinion } };
};

const getSingleOpinion = async (id: string) => {
  const opinion = await MOpinion.findById(id);
  return opinion;
};

const updateOpinion = async (id: string, payload: Partial<IOpinion>) => {
  const opinion = await MOpinion.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return opinion;
};

const deleteOpinion = async (id: string) => {
  const opinion = await MOpinion.findByIdAndDelete(id);
  return opinion;
};

export const OpinionServices = {
  createOpinion,
  getAllOpinion,
  getSingleOpinion,
  updateOpinion,
  deleteOpinion,
};
