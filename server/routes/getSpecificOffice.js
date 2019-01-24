const express = require("express");
const router = express.Router();
const officesController = require("../controllers/officesController");
const officeValidations = require("../validations/officeValidation");
router.use(express.json());


// POST A QUESTION
router.get(
	"/offices/:id",
	officeValidations.aOfficeValidations,
	officesController.getAOffice,
);
  
module.exports = router;