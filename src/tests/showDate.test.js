import showDate from "../utilities/showDate.js";

it("returns a string of the current date", () => {
  expect(showDate()).not.toBeFalsy();
});
