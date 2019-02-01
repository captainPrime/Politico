let express = require("express"); 
let bodyParser = require("body-parser");
const parties = require("../mocks/parties");

const router = express.Router();

//adding a middleware


router.use(bodyParser.json());
 
/* router.use((req, res, next) =>{
	console.log(`${new Date().toString()} => ${req.originalUrl}`);
	next();
}); */
//-------------------------------------------------

//get all questions
router.get("/parties", (req, res)=>{
	if(!req.body){
		res.status(404).send({status: 404, error: "request not found"});
	}

	res.send({status: 200, data: parties});

});

module.exports = router;
