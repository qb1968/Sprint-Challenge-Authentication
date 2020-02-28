const request = require("supertest");

const server = require("../api/server.js");

const Users = require("../database/dbConfig.js")

// const { add } = require("./auth-model.js")

it("should set db environment to testing", function () {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server", function() {
  describe("POST /api/auth/register valid user", function() {
    // beforeAll();
    beforeEach(async () => {
      await Users('users').truncate();
    });

    // afterEach();
    // afterAll();

    it("should return status code 201", function() {
      // register a user
      const newUser = { username: "test", password: "testpass" }
      return request(server)
        .post("/api/auth/register")
        .send(newUser)
        .then(res => {
          expect(res.status).toBe(201);
        })
    })
  })

 
    
  })
