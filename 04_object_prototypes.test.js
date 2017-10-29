
/*
    
    Task 1) Write a function that capitalises a string. To do this, add a prototype function to the base String object.

      Note: You shouldn't do this (unless polyfilling old browsers) as this is modifying the native objects

      Hint: To update a strings prototype use String.prototype.yourFunctionName = 
    
*/ 

test('Capitalise function', () => {
    expect("the little brown dog".capitalize()).toBe("The little brown dog");
});