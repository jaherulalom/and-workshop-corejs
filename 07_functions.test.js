//## EXERCISE

it('should return a reversed string', () => {
  function reverse() {}

  expect(reverse('hello')).toEqual('olleh');
});

it('should return a human age in dog age (1 1 human year to 7 dog years', () => {
  function puppyCalculator() {}

  expect(puppyCalculator(35)).toBe(5);
  expect(puppyCalculator(6)).toBe(1);
  expect(puppyCalculator(89)).toBe(12);
});

it('should return a string with a defined suffix', () => {
  function addSuffix() {}

  expect(markTaskDone('task1')).toEqual('task1 done!');
  expect(markTaskDone('task2')).toEqual('task2 done!');
  expect(hemphasis('do it').toEqual('do it!'));
});
