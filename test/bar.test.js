const assert = require('assert');

describe('file to be tested', () => {
    context('function to be tested', () => {
        before(()=>{
            console.log('==========before');
        });

        after(()=>{
            console.log('==========after');
        });

        beforeEach(()=>{
            console.log('==========beforeEach');
        });

        afterEach(()=>{
            console.log('==========afterEach');
        });

        it('should do something', () => {
            assert.equal(2,2);            

            if(process.env.NODE_ENV == 'development') {
                console.log('DEVELOPMENT MODE');
            }
        })

        it('should do something else', () => {
            assert.deepEqual({name: 'joe'}, {name: 'joe'});
        })

        it('this is a pending test will revisit it when we are ready');
    })

    context('another function', () => {
        it('should do something');
    })
})