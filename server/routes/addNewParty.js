import express from "express";
import partiesController from "../controllers/partiesController";
import partiesValidations from "../validations/partiesValidations";
const router = express.Router();
router.use(express.json());

router.post(
	"/parties",
	partiesValidations.createPartyValidation,
	partiesController.createParty,
);
  
export default router;

    