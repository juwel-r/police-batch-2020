import type { IOpinion } from "./opinion.interface";
import { MOpinion } from "./opinion.model";

const createOpinion = async (payload: IOpinion) => {
  const opinion = await MOpinion.create(payload);
  return opinion;
};

const getAllOpinion = async () => {
  const allOpinion = await MOpinion.find().sort({ createdAt: -1 }).select("name bpNumber workplace websiteName features comments createdAt");
  allOpinion.forEach((opinion) => {
    const maskBP = opinion.bpNumber.slice(0, 6) + "****" + opinion.bpNumber.slice(-2);
    opinion.bpNumber = maskBP;
  });
  const totalOpinion = await MOpinion.countDocuments();
  return { data: allOpinion, meta: { total: totalOpinion } };
};

const getSingleOpinion = async (bpNumber: string) => {
  const opinion = await MOpinion.findOne({ bpNumber });
  return opinion;
};

const getRecommendedData = async () => {
  const websiteNames = await MOpinion.aggregate([
    {
      $match: {
        websiteName: { $exists: true, $ne: "" },
      },
    },
    {
      $group: {
        _id: "$websiteName",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 5,
    },
    {
      $project: {
        _id: 0,
        name: "$_id",
        count: 1,
      },
    },
  ]);

  const features = await MOpinion.aggregate([
    {
      $unwind: "$features",
    },
    {
      $match: {
        features: { $exists: true, $ne: "" },
      },
    },
    {
      $group: {
        _id: "$features",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 5,
    },
    {
      $project: {
        _id: 0,
        name: "$_id",
        count: 1,
      },
    },
  ]);

  return {
    websiteNames,
    features,
  };
};

const updateOpinion = async (bpNumber: string, payload: Partial<IOpinion>) => {
  const opinion = await MOpinion.findOneAndUpdate({ bpNumber }, payload, {
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
  getRecommendedData,
  updateOpinion,
  deleteOpinion,
};
