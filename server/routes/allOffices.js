const express = require("express");
const router = express.Router();
const officesController = require("../controllers/officesController");
const officeValidations = require("../validations/officeValidation");
router.use(express.json());


// POST A QUESTION
router.get(
	"/offices/",
	officeValidations.allOfficeValidations,
	officesController.allOffices,
);
  
module.exports = router;
 