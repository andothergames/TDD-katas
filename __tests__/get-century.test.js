const getCentury = require("../katas/get-century.js");

describe("getCentury", () => {
	test("return 20th for 1999", () => {
		expect(getCentury(1999)).toBe("20th");
	});
	test("return 21st for any year in the range of 2001 - 2099", () => {
		expect(getCentury(2001)).toBe("21st");
		expect(getCentury(2080)).toBe("21st");
		expect(getCentury(2099)).toBe("21st");
	});
	test("return correct century for range of years up to the 100th century", () => {
		expect(getCentury(40)).toBe("1st");
		expect(getCentury(1140)).toBe("12th");
		expect(getCentury(2140)).toBe("22nd");
		expect(getCentury(2240)).toBe("23rd");
		expect(getCentury(9940)).toBe("100th");
	});
})
