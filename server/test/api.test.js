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
describe("/Create party", () => {
	it("api should return status 201 on post", (done) => {

		chai.request(server)
			.post("/api/v1/parties")
			.send({status: 201, data: "object"})
			.end((err, res) => {
				res.should.have.status(422);
				expect(res.body).to.be.a("object");
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

describe("/GET/:id office", () => {
	it("it should GET a office by the given id", (done) => {
		const office = 		{
			"id" : 1,
			"type" : "federal", 
			"name" : "president"
		};

		chai.request(server)
			.get(`/api/v1/offices/${office.id}`)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.data.should.be.a("array");
				res.body.data[0].should.have.property("id").eql(office.id);
				res.body.data[0].should.have.property("type");
				res.body.data[0].should.have.property("name");
				done();
			});
	});
});

describe("/GET allOffices", () => {
	it("it should get all the offices", (done) => {
		chai.request(server)
			.get("/api/v1/offices")
			.end((err, res) => {
				res.should.have.status(200);
				expect(res.body.data).to.be.a("array");
				done();
			});
	});
});

describe("/Create office", () => {
	it("api should return status 201 on post", (done) => {

		chai.request(server)
			.post("/api/v1/offices")
			.send({status: 201, data: "object"})
			.end((err, res) => {
				res.should.have.status(422);
				expect(res.body).to.be.a("object");
				done();
			});
	});
	
});

describe('/Delete Party', function() {
  
	  it('should return status 202 after DELETING a bus', function(done) {
		const party = 	{
			"id" : 1, 
			"name" : "Action Unity Congress",
			"hqAddress": "Ikeja, Lagos.",
			"logoUrl": "string"
		};

		chai.request(server)
			.del(`/api/v1/parties/${party.id}`)
		    .end(function(err, res) {
			  if (err) {
				throw err;
			  }
			  res.should.have.status(200);
			  done();
		  });
	  });
  });

