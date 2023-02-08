import showTime from "../utilities/showTime.js";

it("shows time at the moment it was intitialized", () => {
  expect(showTime()).not.toBeFalsy();
});
