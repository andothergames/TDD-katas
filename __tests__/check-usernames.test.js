const checkUsernames = require("../katas/check-usernames.js");
describe("checkUsernames", () => {
  test("empty array returns false", () => {
    expect(checkUsernames([])).toBe(false);
  });
  test("return false if one username is less than five letters", () => {
    expect(checkUsernames(["dog"])).toBe(false);
  });
  test("return true if one username is five or more letters", () => {
    expect(checkUsernames(["perry"])).toBe(true);
    expect(checkUsernames(["longerusername"])).toBe(true);
  });
  test("return false if one username contains chars outisde of a-z, numbers and underscores", () => {
    expect(checkUsernames(["c00lU$ername!!"])).toBe(false);
  });
  test("return true if one username contains lowercase a-z, numbers and underscores", () => {
    expect(checkUsernames(["this_username10"])).toBe(true);
  });
  test("return false if one username is longer than 20 chars", () => {
    expect(checkUsernames(["thisusernameistoolongmorethan20"])).toBe(false);
  });
  test("return false if array contains one  valid username and one invalid username", () => {
    expect(checkUsernames(["lovely_username", "OhDearUsername!"])).toBe(false);
  });
  test("return true if array contains numerous valid usernames", () => {
    expect(checkUsernames(["lovely_username", "username", "c00lusername"])).toBe(true);
  });
  
});
