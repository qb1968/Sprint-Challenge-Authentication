const request = require("supertest");

const server = require("../api/server.js");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJpY2siLCJpYXQiOjE1ODI5MTA3MjksImV4cCI6MTU4MjkxNDMyOX0.he0iQvitctL36kYHKV2na5uIpj6_BqHadFIuguiInp4";

describe("server", function() {

  describe("GET /api/jokes/", function() {
    it("should return 200", function() {
      return request(server)
        .get("/api/jokes/")
        .set('authorization', token)
        .then(res => {
          expect(res.status).toBe(200);
        })
    })

    it("should return JSON formatted response", function() {
      return request(server)
        .get("/api/jokes/")
        .set('authorization', token)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it("should have jokes in the array", function() {
      return request(server)
        .get("/api/jokes/")
        .set('authorization', token)
        .then(res => {
          expect(res.text).not.toHaveLength(0);
          
        });

    })

    it.todo("should return an array of jokes")
  })
})