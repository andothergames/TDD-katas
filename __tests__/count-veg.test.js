const countVeg = require("../katas/count-veg.js");

describe("countVeg", () => {
  test("empty array returns 0", () => {
    expect(countVeg([])).toBe(0);
  });
  test("return quantity from single object array", () => {
    expect(
      countVeg([{ name: "Parsnip", type: "root", quantity: 4 }], "root")
    ).toBe(4);
  });
  test("return 0 from single object array if type doesn't match second arg", () => {
    expect(
      countVeg([{ name: "Parsnip", type: "root", quantity: 4 }], "brassica")
    ).toBe(0);
  });
  test("return quantity from single object array if type does match second arg", () => {
    expect(
      countVeg([{ name: "Parsnip", type: "root", quantity: 4 }], "root")
    ).toBe(4);
  });
  test("return quantity from two object array if type matches second arg", () => {
    expect(
      countVeg(
        [
          { name: "Parsnip", type: "root", quantity: 4 },
          { name: "Carrot", type: "root", quantity: 5 },
        ],
        "root"
      )
    ).toBe(9);
  });
  test("return correct quantity from two object array if only one type matches second arg", () => {
    expect(
      countVeg(
        [
          { name: "Parsnip", type: "root", quantity: 4 },
          { name: "Onion", type: "bulb", quantity: 3 },
        ],
        "root"
      )
    ).toBe(4);
  });
  test("return correct quantity from multiple object array with mixed types", () => {
    expect(
      countVeg(
        [
          { name: "Parsnip", type: "root", quantity: 4 },
          { name: "Broccoli", type: "brassica", quantity: 1 },
          { name: "Carrot", type: "root", quantity: 5 },
          { name: "Onion", type: "bulb", quantity: 3 },
          { name: "Chard", type: "leaf", quantity: 3 },
          { name: "Runner beans", type: "legume", quantity: 8 },
        ],
        "root"
      )
    ).toBe(9);
  });
});
