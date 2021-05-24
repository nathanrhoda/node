exports.add = function(a, b) {
    return a + b;
}

exports.addCallback = function(a, b, callback) {
    setTimeout(() => {
        return callback(null, a + b);
    }, 500);
}

exports.addPromise = function (a,b) {
    //return Promise.reject(new Error('fake'));
    return Promise.resolve(a + b);
}

exports.foo = function () {
    console.log('Console log was called');    
    console.warn('Console log was called');    
}

exports.bar = async (fileName) => {
    await exports.createFile(fileName);
    let result = await callDB(fileName);

    return result;
}

exports.createFile = (fileName)=>{
    console.log('---in createFile')

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('fake file created');
            return Promise.resolve('done');
        }, 100);
    });
}

function callDB(fileName) {
    console.log('---in callDB');
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('fake db call');
            resolve('saved');
        }, 100);
    });
}