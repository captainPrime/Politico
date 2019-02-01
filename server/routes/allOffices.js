let express = require("express"); 
let bodyParser = require("body-parser");
const offices = require("../mocks/offices");

const router = express.Router();

router.use(bodyParser.json());
router.get("/offices", (req, res)=>{
	if(!req.body){
		res.status(404).send({status: 404, error: "request not found"});
	}
	res.send({status: 200, data: offices});
});

module.exports = router;
 