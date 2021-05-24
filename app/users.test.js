const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

var mongoose = require('mongoose');
var users = require('./users');
var User = require('./models/user');


var sandbox = sinon.createSandbox()

describe('users', ()=> {
    let findStub;
    let deleteStub;
    let sampleArgs;
    let sampleUser;

    beforeEach(()=>{
        sampleUser = {
            id: 123,
            name: 'foo',
            email: 'foo@bar.com'
        }

        findStub = sandbox.stub(mongoose.Model, 'findById').resolves(sampleUser);
        deleteStub = sandbox.stub(mongoose.Model, 'remove').resolves('fake_remove_result');
    })

    afterEach(()=>{
        sandbox.restore();
    })

    context('get', ()=>{
        it('should check  for an id', (done)=>{
            users.get(null, (err, result)=>{
                expect(err).to.exist;
                expect(err.message).to.equal('Invalid user id');
                done();
            })
        })

        it('should call findUserById with id and return the result', (done)=>{
            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model, 'findById').yields(null, {name: 'foo'});

            users.get(123, (err, result)=>{
                expect(err).to.not.exist;
                expect(stub).to.have.been.calledOnce;
                expect(stub).to.have.been.calledWith(123);
                expect(result).to.be.a('object');
                expect(result).to.have.property('name').to.equal('foo');

                done();
            })
        })

        it('should call findUserById with id and return a error', (done)=>{
            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model, 'findById').yields(new Error('fake'));

            users.get(123, (err, result)=>{
                expect(err).to.exist;
                expect(result).to.not.exist;
                expect(stub).to.be.calledWith(123);
                expect(stub).to.be.calledOnce;
                expect(err).to.be.instanceOf(Error);
                expect(err.message).to.equal('fake');

                done();
            })
        })      
    })

    context('delete user', ()=>{
        it('should check for an id  using return', ()=>{
            return users.delete().then((result)=>{
                throw new Error('unexpected success');
            }).catch((ex)=>{
                expect(ex).to.be.instanceOf(Error);
                expect(ex.message).to.equal('Invalid id');
            })
        })

        it('should check for errors using eventually', ()=>{
            return expect(users.delete()).to.eventually.be.rejectedWith('Invalid id');
        })

        it('should call User.delete', async()=>{
            let result = await users.delete(123);

            expect(result).to.equal('fake_remove_result');
            expect(deleteStub).to.be.calledWith({_id:123});
        })
    })    
})