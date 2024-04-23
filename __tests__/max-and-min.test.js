const maxAndMin = require("../katas/max-and-min.js");

describe("max", () => {
  test("returns 0 if array is empty for max function", () => {
    expect(maxAndMin.max([])).toBe(0);
  });
  test("returns 0 if array is empty for min function", () => {
    expect(maxAndMin.min([])).toBe(0);
  });
  test("returns number if array contains one number for max function", () => {
    expect(maxAndMin.max([8])).toBe(8);
  });
  test("returns larger number if array contains two numbers for max function", () => {
    expect(maxAndMin.max([8, 10])).toBe(10);
  });
  test("returns smaller number if array contains two numbers for min function", () => {
    expect(maxAndMin.min([8, 10])).toBe(8);
  });
  test("returns larger number if array contains multiple numbers for max function", () => {
    expect(maxAndMin.max([8, 10, 4, 12, 20, 2])).toBe(20);
  });
  test("returns smaller number if array contains multiple numbers for min function", () => {
    expect(maxAndMin.min([8, 10, 4, 12, 20, 2])).toBe(2);
  });
  test("returns larger number if array contains multiple numbers, some the same, for max function", () => {
    expect(maxAndMin.max([8, 10, 4, 20, 12, 12, 20, 2])).toBe(20);
  });
  test("returns smaller number if array contains multiple numbers, some the same, for min function", () => {
    expect(maxAndMin.min([8, 10, 10, 2, 4, 12, 20, 2])).toBe(2);
  });
})
