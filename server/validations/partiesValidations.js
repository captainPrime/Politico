import parties from "../mocks/parties";
import helpers from "../helpers/helpers";

class PartyValidations {
	createPartyValidation(req, res, next){

		const { name, hqAddress, logoUrl } = req.body;

		if(!hqAddress && !name && !logoUrl){
	    	return res.status(422).json({
		        status: 404,
		        error: "All fields are required, you must provide the hqAddress, name and logoUrl"
		    });
		}
        
		let requiredFields = helpers.isRequired(req.body, ["hqAddress", "name", "logoUrl"]);

		if (typeof requiredFields == "object" && requiredFields.length > 0) {
		    return res.status(422).json({
		      status: 422,
		      error: requiredFields.map(error => error)
		    });
		}

	    const errors = [];

	  	if(hqAddress.length <= 5){
			errors.push({ hqAddress: "hqAddress should be more than 5 characters" });
		}

		if(name.length <= 5){
			errors.push({ name: "name should be more than 5 characters" });
		}

		if(logoUrl.length < 5){
			errors.push({ logoUrl: "logoUrl should be more than 5 characters" });
		}

		if(errors.length > 0){
	    	return res.status(422).json({
	        status: 422,
	        error: errors.map(error => error),
	      });
	    }
		next();
	}
    
	allPartyValidations(req, res, next){
		if(!req.body){
			return res.status(404).send({status: 404, error: "request not found"});
		}

		next();
	}

	aPartyValidations(req, res, next){
		if(!req.body || req.params.id > parties.length){
			return res.status(404).send({status: 404, error: "request not found"});
		}
    
		next();
	}

	editPartyValidation(req, res, next){

		const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));

		if (!specificParty) {
			res.status(404).send({status: 404, error: "request with the ID not found"});
		}
		else if (!req.body.name || req.body.name === "") {
			res.status(422).send({status: 422, error: "Name field is required"});
		}

		next();
	}

	deletPartyValidation(req, res, next){
		const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));
		if (!specificParty) {
			res.status(404).send({status: 404, error: "request with the ID not found"});
		}

		next();
	}


}

export default new PartyValidations;