import calculator from "../src/calculator";

test("adds 2 numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds 2 floating point numbers", () => {
  expect(calculator.add(43.33, 4.44)).toBe(47.769999999999996);
});

test("subtracts 2 numbers", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("multiplies 2 numbers", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("divides 2 numbers", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("handles division by 0", () => {
  expect(calculator.divide(7, 0)).toBeNull();
});

test("handles weird types", () => {
  expect(calculator.subtract("hello", [1, 2, 3])).toBeNull();
});

test("handles inline operations", () => {
  expect(calculator.add(1 + 2, 44446666)).toBe(44446669);
});
