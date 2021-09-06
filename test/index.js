const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING FOR MOVIE", () => {
  it("GET All Movies With Cast", (done) => {
    chai
      .request(app)
      .get("/api/v1/movie")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("movies");
        expect(res.body.movies).to.have.an("array");
        done();
      });
  });

  it("GET Movie By ID", (done) => {
    chai
      .request(app)
      .get("/api/v1/movie/1")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("movie");
        expect(res.body.movie).to.have.an("object");
        expect(res.body.movie).to.have.property("id");
        expect(res.body.movie).to.have.property("name");
        expect(res.body.movie).to.have.property("language");
        expect(res.body.movie).to.have.property("rating");
        expect(res.body.movie).to.have.property("casts");
        expect(res.body.movie.casts).to.have.an("array");
        done();
      });
  });

  it("POST Movie To Database", (done) => {
    const dataSample = {
      name: "Test Movie",
      language: "Indonesia",
      status: "Ended",
      rating: 5,
    };
    chai
      .request(app)
      .post("/api/v1/movie")
      .set("Content-Type", "application/json")
      .send(dataSample)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message");
        expect(res.body).to.have.property("result");
        expect(res.body.result).to.be.an("object");
        done();
      });
  });

  it("PUT (Update) Movie To Database", (done) => {
    const dataSample = {
      name: "Test Update Movie",
      language: "Indonesia",
      status: "Ended",
      rating: 5,
    };
    chai
      .request(app)
      .put("/api/v1/movie/1")
      .set("Content-Type", "application/json")
      .send(dataSample)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message");
        expect(res.body).to.have.property("result");
        expect(res.body.result).to.be.an("object");
        done();
      });
  });
});

describe("API ENDPOINT TESTING FOR CAST", () => {
  it("GET All Cast With Movie", (done) => {
    chai
      .request(app)
      .get("/api/v1/cast")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("casts");
        expect(res.body.casts).to.have.an("array");
        done();
      });
  });

  it("GET Cast By ID", (done) => {
    chai
      .request(app)
      .get("/api/v1/cast/1")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("cast");
        expect(res.body.cast).to.have.an("object");
        expect(res.body.cast).to.have.property("id");
        expect(res.body.cast).to.have.property("name");
        expect(res.body.cast).to.have.property("birthday");
        expect(res.body.cast).to.have.property("deadday");
        expect(res.body.cast).to.have.property("rating");
        expect(res.body.cast).to.have.property("createdAt");
        expect(res.body.cast).to.have.property("updatedAt");
        expect(res.body.cast.movies).to.have.an("array");
        done();
      });
  });

  it("POST Cast To Database", (done) => {
    const dataSample = {
      name: "Test Cast",
      birthday: "1998-04-20",
      deadday: "1998-08-21",
      rating: 5,
    };
    chai
      .request(app)
      .post("/api/v1/cast")
      .set("Content-Type", "application/json")
      .send(dataSample)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message");
        expect(res.body).to.have.property("result");
        expect(res.body.result).to.have.an("object");
        done();
      });
  });

  it("PUT (Update) Cast To Database", (done) => {
    const dataSample = {
      name: "Test Update Cast",
      birthday: "1998-04-20",
      deadday: "1998-08-21",
      rating: 5,
    };
    chai
      .request(app)
      .put("/api/v1/cast/1")
      .set("Content-Type", "application/json")
      .send(dataSample)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message");
        expect(res.body).to.have.property("result");
        expect(res.body.result).to.have.an("object");
        done();
      });
  });
});
