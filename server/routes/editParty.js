const express = require("express");
const router = express.Router();
const parties = require("../mocks/parties");
router.use(express.json());

router.patch("/parties/:id/name/", (req, res) => {
	const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));
	if (!specificParty) {
		res.status(404).send({status: 404, error: "request with the ID not found"});
	}
	else if (!req.body.name || req.body.name === "") {
		res.status(422).send({status: 422, error: "Name field is required"});
	}
  
	specificParty.name = req.body.name;
  
	res.send({status: 200, data: [specificParty]});
});
  
module.exports = router;