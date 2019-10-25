const request = require('supertest');
const db = require('../database/dbConfig')
const server = require('../api/server');


describe('GET /api/tabs/:id', () => {
    let token;
    let id;
    beforeAll(async () => {
        await db('users').truncate();
        let res = await request(server).post('/api/auth/register')
            .send({ username: 'test', password: 'test' });
        token = res.body['token'];
        id = res.body['id'];
    });

    test('should return 200 with token', async () => {
        let res = await request(server)
            .get(`/api/tabs/${id}`)
            .set('Authorization', token);
        expect(res.status).toBe(200);
    })

    test('should return 401 sans token', async () => {
        let res = await request(server)
            .get(`/api/tabs/${id}`);
        expect(res.status).toBe(401);
    })
})
