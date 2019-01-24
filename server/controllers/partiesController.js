const parties = require("../mocks/parties");

class PartiesController {
	static createParty(req, res) {
		const { name, hqAddress, logoUrl } = req.body;

		const Addparty = {
			id: parties.length + 1,
			name,
			hqAddress,
			logoUrl,
		};

		parties.push(Addparty);
		return res.status(201).json({status: 200, data: [Addparty]});
	}

	static allParties(req, res){
		return res.send({status: 200, data: parties});
	}

	static getAParty(req, res){

		const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));
		return res.status(200).json({status: 200, data: [specificParty]});
	}

	static editParty(req, res){
		const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));
  
		specificParty.name = req.body.name;
  
		res.send({status: 200, data: [specificParty]});
	}

	static deleteParty(req, res ){
		const specificParty = parties.find(c => c.id === parseInt(req.params.id, 10));

		// DELETE QUESTION
		const index = parties.indexOf(specificParty);
		parties.splice(index, 1);
  
		res.status(200).send({status: 200, data: [`party with the ID ${specificParty.id} has been deleted`]});
	}
}
module.exports = PartiesController;