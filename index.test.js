const sum = require('./index');

test('ben must return yes', () => {
  expect(sum('ben')).toBe('Yes');
});