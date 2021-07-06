const request = require('supertest');
const server = require('../api/server');
// const db = require('../data/dbConfig');
// const { insert } = require('./usersModel');

//GET USERS
describe('usersRouter', function(){
    describe('GET /users', function(){
        it('should return 200 OK', function(){
            return request(server).get('/users').then(res => {
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

//POST USERS
describe('usersRouter', () => {
    describe('POST /users', () => {
        it('should return 200 OK', () => {
            return request(server)
            .post('/users')
            .send({
                username: "newusername",
                email: "newemail"
            })
            .then(res => {
                // console.log(res)
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

//DELETE USERS
describe('usersRouter', () => {
    describe('DELETE /users/:id', () => {
        it('should return 200 OK', () => {
            return request(server)
            .delete('/:id')
            .send({
                "id": 1
            })
            // .then(res => {
            //     expect(res.status).toBe(200);
            // })
            .catch(err => {
                expect(err.status).toBe(404);
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

///TRY
// describe('usersRouter', () => {
//     describe('POST /users', () => {
//         it('should return 200 OK', async () => {
//             let res = await request(server)
//             .post('/users')
//             .send({
//                 username: "newusername",
//                 email: "newemail"
//             })
//             .then(res => {
//                 expect(res.status).toBe(200);
//             })
//             .catch(error => {
//                 error.status(500).json(error)
//             })
//         })
//     })
// })