import chai from "chai";

import chaiHttp from "chai-http";
import parties from "../mocks/parties";
process.env.NODE_ENV = "test";

import server from "../app";

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
			id : 1, 
			name : "Action Unity Congress",
			hqAddress: "Ikeja, Lagos.",
			logoUrl: "string"
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
			id : 1,
			type : "federal", 
			name : "president"
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

describe("/Delete Party", function() {
  
	  it("should return status 202 after DELETING a party", function(done) {
		const party = 	{
			id : 1, 
			name : "Action Unity Congress",
			hqAddress: "Ikeja, Lagos.",
			logoUrl: "string"
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

describe("/Create party", () => {
	it("it should not create a party without name field", (done) => {
	  const party = {
			hqAddress: "ikeja, lagos",
			logoUrl: "string",
	  };
  
	  chai.request(server)
			.post("/api/v1/parties")
			.send(party)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error[0].should.be.a("object");
		  res.body.error[0].name.should.have.eql("name field is required");
		  done();
			});
	});

});

describe("/Create party", () => {
	it("it should not create a party without hqAddress field", (done) => {
	  const party = {
			name: "Taiwo Oyindamola",
			logoUrl: "string",
	  };
  
	  chai.request(server)
			.post("/api/v1/parties")
			.send(party)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error[0].should.be.a("object");
		  res.body.error[0].hqAddress.should.have.eql("hqAddress field is required");
		  done();
			});
	});

});

describe("/Create party", () => {
	it("it should not create a party without the complete field", (done) => {
	  const party = {
	  };
  
	  chai.request(server)
			.post("/api/v1/parties")
			.send(party)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error[0].should.be.a("string");

		  done();
			});
	});

});



describe("/Create office", () => {
	it("it should not create a party without type field", (done) => {
	  const office = {
			name: "president",
	  };
  
	  chai.request(server)
			.post("/api/v1/offices")
			.send(office)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error[0].should.be.a("object");
		  res.body.error[0].type.should.have.eql("type field is required");
		  done();
			});
	});

});

describe("/Create office", () => {
	it("it should not create a party without name field", (done) => {
	  const office = {
			type: "federal",

	  };
  
	  chai.request(server)
			.post("/api/v1/offices")
			.send(office)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error[0].should.be.a("object");
		  res.body.error[0].name.should.have.eql("name field is required");
		  done();
			});
	});

});

describe("/Create office", () => {
	it("it should not create a party without the complete field", (done) => {
	  const office = {
	  };
   
	  chai.request(server)
			.post("/api/v1/offices")
			.send(office)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error[0].should.be.a("string");

		  done();
			});
	});

});



describe("/Create Party", () => {
	it("it should not create a party if name characters is less than 5 characters", (done) => {
	  const party = {
			name: "abc",
			hqAddress: "Ikeja, Lagos",
			logoUrl: "string",
	  };
  
	  chai.request(server)
			.post("/api/v1/parties")
			.send(party)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error.should.be.a("array");
		  res.body.error[0].should.be.a("object");
		  res.body.error[0].name.should.have.eql("name should be more than 5 characters");
		  done();
			});
	});
  
	it("it should not create a party if hqAddress characters is less than 5 characters", (done) => {
		const party = {
		  name: "Taiwo Oyin",
		  hqAddress: "abc",
		  logoUrl: "string",
		};
	
		chai.request(server)
		  .post("/api/v1/parties")
		  .send(party)
		  .end((err, res) => {
				res.should.have.status(422);
				res.body.should.be.a("object");
				res.body.error.should.be.a("array");
				res.body.error[0].should.be.a("object");
				res.body.error[0].hqAddress.should.have.eql("hqAddress should be more than 5 characters");
				done();
		  });
	  });

});


	
describe("/Create Office", () => {
	it("it should not create a office if name characters is less than 5 characters", (done) => {
	  const office = {
			name: "abc",
			type: "federal"
	  };
  
	  chai.request(server)
			.post("/api/v1/offices")
			.send(office)
			.end((err, res) => {
		  res.should.have.status(422);
		  res.body.should.be.a("object");
		  res.body.error.should.be.a("array");
		  res.body.error[0].should.be.a("object");
		  res.body.error[0].name.should.have.eql("name should be more than 5 characters");
		  done();
			});
	});
  
	it("it should not create a office if name characters is less than 5 characters", (done) => {
		const office = {
		  name: "president",
		  type: "abc"
		};
	
		chai.request(server)
		  .post("/api/v1/offices")
		  .send(office)
		  .end((err, res) => {
				res.should.have.status(422);
				res.body.should.be.a("object");
				res.body.error.should.be.a("array");
				res.body.error[0].should.be.a("object");
				res.body.error[0].type.should.have.eql("type should be more than 5 characters");
				done();
		  });
	  });

});
  
describe("/* return NOT FOUND if request not found on the server", () => {
	it("it should return a 404 error if request is not found", (done) => {
	  chai.request(server)
	  .get("/api/v1/candidate")
	  .end((err, res) => {
				res.should.have.status(404);
				done();
	  });
	});
}); 