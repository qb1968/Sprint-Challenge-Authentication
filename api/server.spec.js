const request = require('supertest');

const server = require('./server');

describe('server', ()=> {
    describe('GET', ()=>{
        it('Should return a 400 OK', ()=>{
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
            })
        })
        it('should return JSON response', ()=>{
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })  
         })  
    })
})

describe('POST', ()=> {
    describe('GET', ()=>{
        it('Should return a 404 OK', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
        it('should return JSON response', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.type).toMatch('text/html')
            })  
         })  
    })
})

