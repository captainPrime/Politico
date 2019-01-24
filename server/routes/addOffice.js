import express from "express";
import officesController from "../controllers/officesController";
import officeValidations from "../validations/officeValidation";
const router = express.Router();

router.post(
	"/offices",
	officeValidations.createOfficeValidation,
	officesController.createOffice,
);
  
export default router;

    