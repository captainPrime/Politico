
import offices from  "../mocks/offices";
import helpers from "../helpers/helpers";

class OfficeValidations {
	createOfficeValidation(req, res, next){

		const { type, name } = req.body;

		if(!type && !name){
	    	return res.status(422).json({
		        status: 422,
		        error: "All fields are required, you must provide the title and body"
		    });
	    }
		let requiredFields = helpers.isRequired(req.body, ["type", "name"]);

		if (typeof requiredFields == "object" && requiredFields.length > 0) {
		    return res.status(422).json({
		      status: 422,
		      error: requiredFields.map(error => error)
		    });
		}

	    const errors = [];

	  	if(type.length <= 5){
			errors.push({ type: "type should be more than 5 characters" });
		}

		if(name.length <= 5){
			errors.push({ name: "name should be more than 5 characters" });
		}

		if(errors.length > 0){
	    	return res.status(422).json({
	        status: 422,
	        error: errors.map(error => error),
	      });
	    }
		next();
	}
    
	allOfficeValidations(req, res, next){
		if(!req.body){
			return res.status(404).send({status: 404, error: "request not found"});
		}

		next();
	}

	aOfficeValidations(req, res, next){
		if(!req.body || req.params.id > offices.length){
			return res.status(404).send({status: 404, error: "request not found"});
		}
    
		next();
	}
}

export default new OfficeValidations;