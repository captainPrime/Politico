const express = require("express");
const router = express.Router();
const partiesController = require("../controllers/partiesController");
const partiesValidations = require("../validations/partiesValidations");
router.use(express.json());

// POST A QUESTION
router.get(
	"/parties/:id",
	partiesValidations.aPartyValidations,
	partiesController.getAParty,
);
  
module.exports = router;