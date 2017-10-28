
/* 
    
    Task 1) Refactor the anAsyncFunction to use shorthand object promise notation

*/

const anAsyncFunction = (result) => {
    return new Promise((resolve, reject) => {

        if (result) {
            return resolve([0, 1, 2]);
        } else {
            return reject(' Oh no :( ');
        }

    })
};

test('When resolved, the then is called', (done) => {
    anAsyncFunction(true)
        .then(result => {
            expect(result).toEqual([0, 1, 2]);
            done();
        });
});

test('When rejected, the catch handler is called', (done) => {

    anAsyncFunction(false)
        .catch(e => {
            expect(e).toBeTruthy();
            done();
        });

});

