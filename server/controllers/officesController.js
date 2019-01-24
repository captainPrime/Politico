const offices = require("../mocks/offices");

class OfficesController {
	static createOffice(req, res) {
		const { type, name } = req.body;

		const Addoffice = {
			id: offices.length + 1,
			type,
			name,
		};

		offices.push(Addoffice);
		return res.status(201).json({status: 200, data: [Addoffice]});
	}

	static allOffices(req, res){
		return res.send({status: 200, data: offices});
	}

	static getAOffice(req, res){

		const specificOffices = offices.find(c => c.id === parseInt(req.params.id, 10));
		return res.status(200).json({status: 200, data: [specificOffices]});
	}

}
module.exports = OfficesController;
