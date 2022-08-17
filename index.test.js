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
    const calculator1 = new myCalculator(3,2);
    test('3 + 2 is 5', () => {
      expect(calculator1.add()).toBe(5);
    });
    const calculator2 = new myCalculator(4,8);
    test('4 + 8 is 12', () => {
        expect(calculator2.add()).toBe(12);
      });
    const calculator3 = new myCalculator(5,5);
    test('5 + 5 is 10', () => {
        expect(calculator3.add()).toBe(10);
      });
});

describe('my calculator', () => {
    const calculator1 = new myCalculator(3,2);
    test('3 - 2 is 1', () => {
      expect(calculator1.subtract()).toBe(1);
    });
    const calculator2 = new myCalculator(4,8);
    test('4 - 8 is -4', () => {
        expect(calculator2.subtract()).toBe(-4);
      });
    const calculator3 = new myCalculator(5,5);
    test('5 - 5 is 0', () => {
        expect(calculator3.subtract()).toBe(0);
      });
});