"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpinionServices = void 0;
const opinion_model_1 = require("./opinion.model");
const createOpinion = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_model_1.MOpinion.create(payload);
    return opinion;
});
const getAllOpinion = () => __awaiter(void 0, void 0, void 0, function* () {
    const allOpinion = yield opinion_model_1.MOpinion.find().sort({ createdAt: -1 }).select("name bpNumber workplace websiteName features comments createdAt");
    allOpinion.forEach((opinion) => {
        const maskBP = opinion.bpNumber.slice(0, 6) + "****" + opinion.bpNumber.slice(-2);
        opinion.bpNumber = maskBP;
    });
    const totalOpinion = yield opinion_model_1.MOpinion.countDocuments();
    return { data: allOpinion, meta: { total: totalOpinion } };
});
const getSingleOpinion = (bpNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_model_1.MOpinion.findOne({ bpNumber });
    return opinion;
});
const getRecommendedData = () => __awaiter(void 0, void 0, void 0, function* () {
    const websiteNames = yield opinion_model_1.MOpinion.aggregate([
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
    const features = yield opinion_model_1.MOpinion.aggregate([
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
});
const updateOpinion = (bpNumber, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_model_1.MOpinion.findOneAndUpdate({ bpNumber }, payload, {
        new: true,
        runValidators: true,
    });
    return opinion;
});
const deleteOpinion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_model_1.MOpinion.findByIdAndDelete(id);
    return opinion;
});
exports.OpinionServices = {
    createOpinion,
    getAllOpinion,
    getSingleOpinion,
    getRecommendedData,
    updateOpinion,
    deleteOpinion,
};
//# sourceMappingURL=opinion.service.js.map