let express = require("express"); 

const parties = require("../mocks/parties");
let bodyParser = require("body-parser");

const router = express.Router();

//adding a middleware

router.use(bodyParser.json());
router.get("/parties/:id", (req, res)=>{
	if(!req.body || req.params.id > parties.length){
		res.status(404).send({status: 404, error: "request not found"});
	}

	const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));
	res.send({status: 200, data: [specificParty]});

});

module.exports = router;