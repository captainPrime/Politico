let express = require("express"); 

const offices = require("../mocks/offices");
let bodyParser = require("body-parser");

const router = express.Router();

//adding a middleware

router.use(bodyParser.json());
/*  
router.use((req, res, next) =>{
	console.log(`${new Date().toString()} => ${req.originalUrl}`);
	next();
}); */
//-------------------------------------------------


//get a question by email
router.get("/offices/:id", (req, res)=>{
	if(!req.body || req.params.id > offices.length){
		res.status(404).send({status: 404, error: "request not found"});
	}



	const specificOffices = offices.find(c => c.id === parseInt(req.params.id, 10));
	res.send({status: 200, data: [specificOffices]});

});

module.exports = router;