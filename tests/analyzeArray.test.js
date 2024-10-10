import analyzeArray from "../src/analyzeArray";

test("gets average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(
    expect.objectContaining({ average: 4 })
  );
});

test("gets correct length", () => {
  expect(analyzeArray([1, 8, 3, 4])).toEqual(
    expect.objectContaining({ length: 4 })
  );
});

test("gets minimum", () => {
  expect(analyzeArray([6, 4, 2, 7])).toEqual(
    expect.objectContaining({ min: 2 })
  );
});

test("gets maximum", () => {
  expect(analyzeArray([6, 4, 2, 7])).toEqual(
    expect.objectContaining({ max: 7 })
  );
});

test("average of bigger array", () => {
  expect(analyzeArray([6, 8, 7, 25, 99, 6, 3])).toEqual(
    expect.objectContaining({ average: 22 })
  );
});

test("minimum of bigger array", () => {
  expect(analyzeArray([6, 8, 7, 25, 99, 6, 3])).toEqual(
    expect.objectContaining({ min: 3 })
  );
});

test("maximum of bigger array", () => {
  expect(analyzeArray([6, 8, 7, 25, 99, 6, 3])).toEqual(
    expect.objectContaining({ max: 99 })
  );
});

test("minimum of array with dupes", () => {
  expect(analyzeArray([6, 8, 7, 25, 3, 6, 3])).toEqual(
    expect.objectContaining({ min: 3 })
  );
});

test("maximum of array with dupes", () => {
  expect(analyzeArray([6, 8, 7, 25, 99, 99, 3])).toEqual(
    expect.objectContaining({ max: 99 })
  );
});

test("all dupe array max/min", () => {
  expect(analyzeArray([1, 1, 1, 1])).toEqual(
    expect.objectContaining({ max: 1, min: 1 })
  );
});

test("empty array handler", () => {
  expect(analyzeArray([])).toBeNull();
});

test("single element behavior", () => {
  expect(analyzeArray([1])).toEqual(
    expect.objectContaining({ average: 1, max: 1, min: 1, length: 1 })
  );
});
