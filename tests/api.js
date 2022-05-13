const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const expect = chai.expect;
const url = "http://localhost:3000";

describe("API", () => {
  it("GET /", (done) => {
    chai
      .request(url)
      .get("/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message");

        expect(res.body.message).to.be.an("string");
        expect(res.body.message).to.equal("Hello World!");
        done();
      });
  });

  it("GET /todo", (done) => {
    chai
      .request(url)
      .get("/todo")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        expect(res.body).to.have.property("data");
        expect(res.body.data).to.be.an("array");

        expect(res.body.data[0]).to.have.property("id");
        expect(res.body.data[0].id).to.be.an("number");

        expect(res.body.data[0]).to.have.property("todo");
        expect(res.body.data[0].todo).to.be.an("string");
        done();
      });
  });
});
