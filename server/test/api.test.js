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
