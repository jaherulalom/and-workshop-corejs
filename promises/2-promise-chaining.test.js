
/* 
	Question: 
		- What happens if you call .then without returning anything?
		- Does a .then have to return a promise? Can it? Try wrapping addOne's function with: Promise.resolve()
    
    Task 1) Abstract out the .then calls into a separate function, not anonymous
    Task 2) Refactor the second test to be flat like the first

*/

const addOne = result => result + 1;

test('Add up to 6!', (done) => {
    return Promise.resolve(0)
		.then((num) => num + 2 )
		.then((num) => num + 2 )
		.then((num) => num + 2 )
		.then(function(result){
			expect(result).toBe(6);
		})
		.then(done);
});

test('A big old chain of promises', (done) => {
	Promise.resolve(0)
	    .then(addOne)
	    .then((value) => {
	        return Promise.resolve(value)
	            .then((value) => {
			        return Promise.resolve(value)
			            .then(addOne)
			            .then(addOne)
			            .then(addOne)
			    })
	            .then(addOne)
	            .then(addOne)
	    })
	    .then(addOne)
	    .then((value) => {
	        return Promise.resolve(value)
	            .then(addOne)
	            .then(addOne)
	            .then(addOne)
	    })
	    .then((result) => {
	        expect(result).toBe(10);
	    })
	    .then(done);
});
