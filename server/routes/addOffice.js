const express = require("express");
const router = express.Router();
const offices = require("../mocks/offices");
router.use(express.json());


// POST A QUESTION
router.post("/offices", (req, res) => {
	/* input validation */
/*   
  if(err){
    res.status(404).send({status: 404, error: "Request not found"});
  }
   */
	if ((!req.body.name || req.body.name === "") || (!req.body.type || req.body.type === "")) {
		res.status(422).send({status: 422, error: "All fields are required"});
	}


	const Addoffice = {
		id: offices.length + 1,
		type: req.body.type,
		name: req.body.name,
	};

	offices.push(Addoffice);
	res.status(201).send({status: 201, data: [Addoffice]});
});
module.exports = router;

    