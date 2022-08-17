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

describe('my calculator', () => {
    const calculator1 = new myCalculator(3,2);
    test('3 * 2 is 6', () => {
      expect(calculator1.multiply()).toBe(6);
    });
    const calculator2 = new myCalculator(4,8);
    test('4 * 8 is 32', () => {
        expect(calculator2.multiply()).toBe(32);
      });
    const calculator3 = new myCalculator(5,0);
    test('5 * 0 is 0', () => {
        expect(calculator3.multiply()).toBe(0);
      });
});

describe('my calculator', () => {
    const calculator1 = new myCalculator(4,2);
    test('4 / 2 is 2', () => {
      expect(calculator1.divide()).toBe(2);
    });
    const calculator2 = new myCalculator(4,8);
    test('4 / 8 is 0.5', () => {
        expect(calculator2.divide()).toBe(0.5);
      });
    const calculator3 = new myCalculator(0,5);
    test('0 / 5 is 0', () => {
        expect(calculator3.divide()).toBe(0);
      });
    const calculator4 = new myCalculator(5,0);
    test('5 / 0 is E', () => {
        expect(calculator4.divide()).toBe('E');
      });
});
