import { Router } from "express";
import { OpinionController } from "./opinion.controller";
import { createOpinionZod, updateOpinionZod } from "./opinion.validation";
import { zodValidation } from "../../middleware/zodValidation";

const router = Router();

router.post("/create", zodValidation(createOpinionZod), OpinionController.createOpinion);

router.get("/all", OpinionController.getAllOpinion);

router.get("/:bpNumber", OpinionController.getSingleOpinion);

router.patch("/:bpNumber", zodValidation(updateOpinionZod), OpinionController.updateOpinion);

// router.delete("/:id", OpinionController.deleteOpinion);

export const OpinionRouter = router;
