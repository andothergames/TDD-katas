const sumArgs = require("../katas/sum-args.js");

describe("sumArgs", () => {
    test("function runs and returns single number", () => {
        expect(sumArgs(23)).toBe(23);
    });
    test("return 0 if no arguments", () => {
        expect(sumArgs()).toBe(0);
    });
    // test("accepts multiple arguments", () => {
    //     expect(sumArgs(23, 13, 14)).toEqual([23, 13, 14]);
    // });
    //not sure if it is bad practice to comment out a test, but this was more to test my knowledge of ...arguments
    test("returns the sum of two number arguments", () => {
        expect(sumArgs(1, 2)).toEqual(3);
    });
    test("returns the sum of multiple number arguments", () => {
        expect(sumArgs(1, 2, 3, 4)).toEqual(10);
    });
});