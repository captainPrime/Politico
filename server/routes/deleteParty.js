const express = require("express");
const router = express.Router();
const parties = require("../mocks/parties");

router.use(express.json());


//adding a middleware to tell us the date of operation on console
/* router.use((req, res, next) =>{
	console.log(`${new Date().toString()} => ${req.originalUrl}`);
	next();
}); */


router.delete("/parties/:id", (req, res) => {
	const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));
	if (!specificParty) {
		res.status(404).send({status: 404, error: "request with the ID not found"});
	}
  
	// DELETE QUESTION
	const index = parties.indexOf(specificParty);
	parties.splice(index, 1);
  
	res.status(200).send({status: 200, data: [`party with the ID ${specificParty.id} has been deleted`]});
});

module.exports = router;