const lengthOf = require('./index');
const reverseOf = require('./index2');

test('ben must return yes', () => {
  expect(lengthOf('ben')).toBe('Yes');
});

test('benjamin must return nimajneb' , () => {
    expect(reverseOf('benjamin')).toBe('nimajneb');
})