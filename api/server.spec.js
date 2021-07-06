const request = require('supertest');
const server = require('./server');

// ENV TEST
it('should set dv environment to tsting', function(){
    expect(process.env.DB_ENV).toBe("testing")
})

// GET / TESTS
describe('server', function(){
    describe('GET /', function(){
        it('should return 200 OK', function(){

            return request(server).get('/').then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON formatted response', function(){
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
        it('should return an "api" property with a value of "running" inside', function(){
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ api: "running"});
                expect(res.body.api).toBe("running")
            })
        })
    })
})
