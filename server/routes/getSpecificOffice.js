import express from "express";
import officesController from "../controllers/officesController";
import officeValidations from "../validations/officeValidation";
const router = express.Router();
router.use(express.json());

router.get(
	"/offices/:id",
	officeValidations.aOfficeValidations,
	officesController.getAOffice,
);
  
export default router;