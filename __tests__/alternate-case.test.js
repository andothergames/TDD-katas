const alternateCase = require('../katas/alternate-case.js');

describe("alternateCase", () => {
    test("one lower case letter returns uppercase version", () => {
        expect(alternateCase("a")).toBe("A");
    });
    test("take two lower case letters and return one uppercase one lowercase", () => {
        expect(alternateCase("ab")).toBe("Ab");
    });
    test("deal with longer strings, correctly upper or lower casing the chars", () => {
        expect(alternateCase("abcdef")).toBe("AbCdEf");
    });
    test("deals correctly with strings that have spaces", () => {
        expect(alternateCase("hello world")).toBe("HeLlO wOrLd");
        expect(alternateCase("hello to the world")).toBe("HeLlO tO tHe WoRlD");

    })
    test("deals correctly with strings that have non alphabetical characters", () => {
        expect(alternateCase("[hello*world, ok]")).toBe("[HeLlO*wOrLd, Ok]");

    })


})