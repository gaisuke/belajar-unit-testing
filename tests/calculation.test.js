const { sumNumber, multiplyNumber } = require('../src/calculation');

const a = 3;
const b = 2;

// Test sumNumber
test("sumNumber(a,b) should return 5", () => {
    const result = sumNumber(a, b);
    expect(result).toBe(5);
});

// Test multiplyNumber
test("multiplyNumber(a,b) should return 6", () => {
    const result = multiplyNumber(a, b);
    expect(result).toBe(6);
});