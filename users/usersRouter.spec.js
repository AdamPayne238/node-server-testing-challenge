const request = require('supertest');
const server = require('../api/server');
// const db = require('../data/dbConfig');
// const { insert } = require('./usersModel');


describe('usersRouter', function(){
    describe('GET /users', function(){
        it('should return 200 OK', function(){
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON response', function(){
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
})

// describe('usersRouter', function(){
//     describe('POST /users', function(){
//         it('should return 200 OK', async function(){
//             await db('users').truncate();
//             await insert({ username: "nn", email: "nn"})
//             return request(server).post('/').then(res => {
//                 expect(res.status).toBe(200);
//             })
//         })
//     })
// })

describe('usersRouter', () => {
    describe('POST /users', () => {
        it('should return 200 OK', () => {
            return request(server)
            .post('/')
            .send({
                "username": "newusername",
                "email": "newemail"
            })
            .then(res => {
                expect(res.status).toBe(200);
            })
        })

    })
})
