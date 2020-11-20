const Test = require('./quest-2020');


describe('Fibo function', () => {
    test('fib', () => {
        expect(Test.FibonacciSequence(1)).toBe(1);
        expect(Test.FibonacciSequence(3)).toBe(2);
        expect(Test.FibonacciSequence(12)).toBe(144);
    });
});
describe('ArrayShift function', () => {
    test('[1, 2, 3, 4 ,5] right 3 >>[3, 4, 5, 1, 2]', () => {
        expect(Test.ArrayShift(['john', 'jane', 'sarah', 'alex'], 'left', 2)).toEqual(['sarah', 'alex', 'john', 'jane']);
        expect(Test.ArrayShift([1, 2, 3, 4, 5], 'right', 3)).toEqual([3, 4, 5, 1, 2]);
        expect(Test.ArrayShift([], 'left', 1)).toEqual([]);
    });
});
describe('SecondMax function', () => {
    test('> secondMax([2, 3, 4, 5])>>4', () => {
        expect(Test.SecondMax([2, 3, 4, 5])).toEqual(4);
        expect(Test.SecondMax([9, 2, 21, 21])).toEqual(9);
        expect(Test.SecondMax([4, 4, 4, 4])).toEqual(4);
        expect(Test.SecondMax([4123])).toEqual(4123);
        expect(Test.SecondMax([])).toEqual('Error!');
    });
});