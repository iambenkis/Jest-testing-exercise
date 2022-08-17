const sum = require('./index');

test('ben must return 3', () => {
  expect(sum('ben')).toBe(3);
});