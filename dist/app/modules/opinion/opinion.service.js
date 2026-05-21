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
    const allOpinion = yield opinion_model_1.MOpinion.find().sort({ createdAt: -1 });
    const totalOpinion = yield opinion_model_1.MOpinion.countDocuments();
    return { data: allOpinion, meta: { total: totalOpinion } };
});
const getSingleOpinion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_model_1.MOpinion.findById(id);
    return opinion;
});
const updateOpinion = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_model_1.MOpinion.findByIdAndUpdate(id, payload, {
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
    updateOpinion,
    deleteOpinion,
};
//# sourceMappingURL=opinion.service.js.map