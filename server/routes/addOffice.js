import express from "express";
import officesController from "../controllers/officesController";
import officeValidations from "../validations/officeValidation";
const router = express.Router();
router.use(express.json());

router.post(
	"/offices",
	officeValidations.createOfficeValidation,
	officesController.createOffice,
);
  
export default router;

    