"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpinionRouter = void 0;
const express_1 = require("express");
const opinion_controller_1 = require("./opinion.controller");
const opinion_validation_1 = require("./opinion.validation");
const zodValidation_1 = require("../../middleware/zodValidation");
const router = (0, express_1.Router)();
router.post("/create", (0, zodValidation_1.zodValidation)(opinion_validation_1.createOpinionZod), opinion_controller_1.OpinionController.createOpinion);
router.get("/all", opinion_controller_1.OpinionController.getAllOpinion);
router.get("/reports", opinion_controller_1.OpinionController.getRecommendedData);
router.get("/:bpNumber", opinion_controller_1.OpinionController.getSingleOpinion);
router.patch("/:bpNumber", (0, zodValidation_1.zodValidation)(opinion_validation_1.updateOpinionZod), opinion_controller_1.OpinionController.updateOpinion);
// router.delete("/:id", OpinionController.deleteOpinion);
exports.OpinionRouter = router;
//# sourceMappingURL=opinion.route.js.map