const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
const {getUser} = require('../teste1');
const teste1 = require('../teste1');
const mockFakeData = require('./mocks/mockAllUser');

chai.use(sinonChai);

describe('Teste do arquivo teste1.js', () => {
    afterEach(() => {
        sinon.reset();
    });

    it('Testando se é possível fazer uma busca pelo nome', async () => {
        const res = {};
        const req = { query: { name: 'joao-oliveira' } };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        const next = sinon.stub();
        sinon.stub(teste1, 'getUser').resolves();
        
        await getUser(req, res, next);
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(mockFakeData[0]);
    })
})