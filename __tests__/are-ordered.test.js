const areOrdered = require('../katas/are-ordered.js');

describe("areOrdered", () => {
    test("return false if array empty", () => {
        expect(areOrdered([])).toBe(false)
    });
    test("return true if array contains one number", () => {
        expect(areOrdered([1])).toBe(true)
    });
    test("returns two ordered numbers as true", () => {
        expect(areOrdered([1, 2])).toBe(true)
    });
    test("returns longer out of order array as false", () => {
        expect(areOrdered([1, 2, 56, 34, 21, 1, 2, 3])).toBe(false)
    });

})