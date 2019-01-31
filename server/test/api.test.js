const chai = require("chai");
const chaiHttp = require("chai-http");
const parties = require("../mocks/parties");
process.env.NODE_ENV = "test";
const server = require("../app");
const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);


describe("/GET allParties", () => {
	it("it should get all the parties", (done) => {
		chai.request(server)
			.get("/api/v1/parties")
			.end((err, res) => {
				res.should.have.status(200);
				expect(res.body.data).to.be.a("array");
				done();
			});
	});
});

describe("/GET/:id parties", () => {
	it("it should GET a party by the given id", (done) => {
		const party = 	{
			"id" : 1, 
			"name" : "Action Unity Congress",
			"hqAddress": "Ikeja, Lagos.",
			"logoUrl": "string"
		};

		chai.request(server)
			.get(`/api/v1/parties/${party.id}`)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.data.should.be.a("array");
				res.body.data[0].should.have.property("id").eql(party.id);
				res.body.data[0].should.have.property("name");
				res.body.data[0].should.have.property("hqAddress");
				res.body.data[0].should.have.property("logoUrl");

				done();
			});
	});
});

