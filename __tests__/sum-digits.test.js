const sumDigits = require('../katas/sum-digits');

describe("sumDigits", () => {
  test("returns input on single digit numbers", () => {
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(9)).toBe(9);
  });
  test("returns sum of multi digit numbers", () => {
    expect(sumDigits(99)).toBe(18);
    expect(sumDigits(123)).toBe(6);
  });
  test("ignore non-numerical characters", () => {
    expect(sumDigits(10.5)).toBe(6);
    expect(sumDigits(-23)).toBe(5);
  });


})


