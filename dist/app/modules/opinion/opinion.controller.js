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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpinionController = void 0;
const opinion_service_1 = require("./opinion.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const createOpinion = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_service_1.OpinionServices.createOpinion(req.body);
    (0, sendResponse_1.sendRes)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Opinion created Successfully",
        data: opinion,
    });
}));
const getAllOpinion = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield opinion_service_1.OpinionServices.getAllOpinion();
    (0, sendResponse_1.sendRes)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Opinions retrieved Successfully",
        data: result.data,
        meta: result.meta,
    });
}));
const getSingleOpinion = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bpNumber } = req.params;
    const opinion = yield opinion_service_1.OpinionServices.getSingleOpinion(bpNumber);
    (0, sendResponse_1.sendRes)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Opinion retrieved Successfully",
        data: opinion,
    });
}));
const getRecommendedData = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const opinion = yield opinion_service_1.OpinionServices.getRecommendedData();
    (0, sendResponse_1.sendRes)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Opinion retrieved Successfully",
        data: opinion,
    });
}));
const updateOpinion = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bpNumber } = req.params;
    const opinion = yield opinion_service_1.OpinionServices.updateOpinion(bpNumber, req.body);
    (0, sendResponse_1.sendRes)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Opinion updated Successfully",
        data: opinion,
    });
}));
const deleteOpinion = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bpNumber } = req.params;
    const opinion = yield opinion_service_1.OpinionServices.deleteOpinion(bpNumber);
    (0, sendResponse_1.sendRes)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Opinion deleted Successfully",
        data: opinion,
    });
}));
exports.OpinionController = {
    createOpinion,
    getAllOpinion,
    getSingleOpinion,
    getRecommendedData,
    updateOpinion,
    deleteOpinion,
};
//# sourceMappingURL=opinion.controller.js.map