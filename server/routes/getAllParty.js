import express from "express";
import partiesController from "../controllers/partiesController";
import partiesValidations from "../validations/partiesValidations";
const router = express.Router();
router.use(express.json());
router.use(express.json());

router.get(
	"/parties/",
	partiesValidations.allPartyValidations,
	partiesController.allParties,
);
  
export default router;
 