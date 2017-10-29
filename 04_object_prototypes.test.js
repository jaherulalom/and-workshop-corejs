
/*
    
    Task 1) Write a function that capitalises a string. To do this, add a prototype function to the base String object.
    
*/ 

test('Capitalise function', () => {
    expect("the little brown dog".capitalize()).toBe("The little brown dog");
});