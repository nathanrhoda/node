const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

var demo = require('./demo');


describe('demo', ()=>{
  context('add', ()=>{
      it('should add two numbers', ()=>{
          expect(demo.add(1,2)).to.equal(3);
      })
  })  

  context('callback add', ()=>{
      it('should test the callback', (done)=>{
          demo.addCallback(1,2, (err, result)=>{
              expect(err).to.not.exist;
              expect(result).to.equal(3);
              done();
          })
      })
  })

  context('test promise', ()=>{
      it('should add with a promise cb', (done)=>{
          demo.addPromise(1,2).then((result)=>{
              expect(result).to.equal(3);
              done();
          }).catch((ex)=>{
              console.log('caught error')
              done(ex);
          })
      })

      it('should test a promise with return', ()=>{
          demo.addPromise(1,2).then((result)=>{
              expect(result).to.equal(3);
          })
      })

      it('should test promise with asyn await', async()=>{
          let result = await demo.addPromise(1,2);
          expect(result).to.equal(3);
      })

      it('should test promise with chai as promised', async ()=>{
          await expect(demo.addPromise(1,2)).to.eventually.equal(3);
      })

  })
})