import express from "express";
import partiesController from "../controllers/partiesController";
import partiesValidations from "../validations/partiesValidations";
const router = express.Router();
router.use(express.json());

router.delete(
	"/parties/:id",
	partiesValidations.deletPartyValidation,
	partiesController.deleteParty,
);
  
export default router;