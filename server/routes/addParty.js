const express = require("express");
const router = express.Router();
const parties = require("../mocks/parties");
router.use(express.json());


// POST A QUESTION
router.post("/parties", (req, res) => {
	/* input validation */
/*   
  if(err){
    res.status(404).send({status: 404, error: "Request not found"});
  }
   */
	if ((!req.body.name || req.body.name === "") && (!req.body.hqAddress || req.body.hqAddress === "")) {
		res.status(422).send({status: 422, error: "All fields are required"});
	}


	const Addparty = {
		id: parties.length + 1,
		name: req.body.name,
		hqAddress: req.body.hqAddress,
	};

	parties.push(Addparty);
	res.status(201).send({status: 201, data: [Addparty]});
});
module.exports = router;

    