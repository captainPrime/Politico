import express from "express";
import partiesController from "../controllers/partiesController";
import partiesValidations from "../validations/partiesValidations";
const router = express.Router();
router.use(express.json());

router.patch(
	"/parties/:id/name",
	partiesValidations.editPartyValidation,
	partiesController.editParty,
);
  
export default router;