const request = require('supertest');
const db = require('../database/dbConfig')
const server = require('../api/server');

describe('POST /Api/Auth/Register', () => {
    beforeEach(() => db('users').truncate());
    
    test('register user works, returns 200', async () => {
        let res = await request(server).post('/api/auth/register')
            .send({ username: 'test', password: 'test'})
        expect(res.status).toBe(200)
    })
    
    test('register user works, returns a token', async () => {
        let res = await request(server).post('/api/auth/register')
            .send({ username: 'test', password: 'test'})
        expect(res.body).toHaveProperty('token')
    }) 

    test('invalid request body results in 401', async () => {
        let res = await request(server).post('/api/auth/register')
            .send({noUser: true})
        expect(res.status).toBe(401)
    }) 
})

describe('POST /Api/Auth/Login', () => {
    beforeAll(async () => {
            await db('users').truncate()
            await request(server).post('/api/auth/register')
            .send({ username: 'test', password: 'test'})
    });
    
    test('login user works, returns 200', async () => {
        let res = await request(server).post('/api/auth/login')
            .send({ username: 'test', password: 'test'})
        expect(res.status).toBe(200)
    })
    
    test('login user works, returns a token', async () => {
        let res = await request(server).post('/api/auth/login')
            .send({ username: 'test', password: 'test'})
        expect(res.body).toHaveProperty('token')
    }) 

    test('invalid credentials results in 401', async () => {
        let res = await request(server).post('/api/auth/login')
            .send({username: 'no', password: 'no'})
        expect(res.status).toBe(401)
    }) 
})
