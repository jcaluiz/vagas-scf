const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
// const {getUser} = require('../teste2');
const teste2 = require('../teste2');
const {addMockData} = require('./mocks/mockAllUser');

chai.use(sinonChai);

describe('Teste do arquivo teste2.js', () => {
    afterEach(() => {
        sinon.reset();
    });

    it('Testando se é possível fazer um cadastro de usuário', async () => {
        const res = {};
        const req = { body: { name: 'Junior', job: 'Desenvolvedor' } };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        const next = sinon.stub();
        sinon.stub(teste2);
        
        await teste2(req, res, next);
        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith(addMockData);
    })
})