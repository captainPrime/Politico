let express = require("express"); 
let bodyParser = require("body-parser");
const offices = require("../mocks/offices");

const router = express.Router();

//adding a middleware


router.use(bodyParser.json());
 
/* router.use((req, res, next) =>{
	console.log(`${new Date().toString()} => ${req.originalUrl}`);
	next();
}); */
//-------------------------------------------------

//get all questions
router.get("/offices", (req, res)=>{
	if(!req.body){
		res.status(404).send({status: 404, error: "request not found"});
	}

	res.send({status: 200, data: offices});

});

module.exports = router;
 