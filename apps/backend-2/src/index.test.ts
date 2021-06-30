jest.useFakeTimers();
jest.mock("node-fetch", () => jest.fn());

test("should pass", () => {
  expect(true).toBeTruthy();
});
