const lengthOf = require('./index');
const reverseOf = require('./index2');
const myCalculator = require('./index3');

test('ben must return yes', () => {
  expect(lengthOf('ben')).toBe('Yes');
});

test('benjamin must return nimajneb' , () => {
    expect(reverseOf('benjamin')).toBe('nimajneb');
})

describe('my calculator', () => {
    const calculator = new myCalculator(3,2);
    test('3 + 2 is 5', () => {
      expect(calculator.add()).toBe(5);
    });
});