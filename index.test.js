const lengthOf = require('./index');
const reverseOf = require('./index2');

test('ben must return yes', () => {
  expect(lengthOf('ben')).toBe('Yes');
});

test('ben must return neb' , () => {
    expect(reverseOf('ben')).toBe('neb');
})