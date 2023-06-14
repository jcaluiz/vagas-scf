const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
// const {getUser} = require('../teste1');
const supertest = require('supertest');
const teste3 = require('../teste3');
// const {mockFakeData} = require('./mocks/mockAllUser');
const express = require('express');
const checkPermission = require('../middlewares/checkPermission');

chai.use(sinonChai);
chai.use(chaiHttp);

describe('Teste do arquivo teste3.js', () => {
    let app;
    let request;

    beforeEach(() => {
        app = express();
        app.delete('/users', checkPermission, teste3);
        request = supertest(app);
    })

    afterEach(() => {
        sinon.reset();
    });

    it('Testando se é possível fazer deletar passando o nome por query', async () => {
        const res = {
            status: sinon.stub(),
            json: sinon.stub().callsFake((response) => {
                return Promise.resolve();
            }),
        };
        const req = {
            query: { name: 'joao-oliveira' },
            headers: { permissions: 'delete' },
        };

        await request.delete('/users')
            .query(req.query)
            .set(req.headers)
            .expect(200)
            .expect('success');

        expect(res.status).to.not.have.been.called;
        expect(res.json).to.not.have.been.called;
    })
})