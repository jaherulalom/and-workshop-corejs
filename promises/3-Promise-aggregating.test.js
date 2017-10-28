
/* 

	Question: 
		- Do the two API calls need to be made separately?
		- What is happening right now? 
		- What could be the impact on performance?
    
    Task 1) Rewrite the first test to use Promise.all
    Task 2) Promise.all returns an array, but that means we have to access with the gross array[0] syntax. 
    	Rewrite the .then to use the spread operator instead

*/

// ----- Task 1

const getUser = result => {
	return Promise.resolve({
		name: "Alice"
	});
};

const getPlans = result => {
	return Promise.resolve({
		id: 4,
		plan: "My plan"
	});
};

const subscribe = (userName, id) => {
	return `Create the plan called ${userName} for plan ID ${id}`;
};

test('Get Alices plan', (done) => {

	return getUser()
		.then((user) => {
			return getPlans().then((plans) => {
				return subscribe(user.name, plans.id);		
			})
		})
		.then((string)=> {
			expect(string).toBe('Create the plan called Alice for plan ID 4')
			done();
		});
    
});





// ----- Task 2

const hey = (firstName, lastName) => {
	return `Hey ${firstName} ${lastName}!`;
}

test('Get Alices plan', (done) => {

	return Promise.all([
			Promise.resolve('Bob'),
			Promise.resolve('Miggins'),
		])
		.then((data)=> {
			return hey(data[0], data[1]);
		})
		.then((string)=> {
			expect(string).toBe('Hey Bob Miggins!')
			done();
		});
});
