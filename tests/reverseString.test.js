import reverseString from "../src/reverseString.js";

test("return reversed string", () => {
  expect(reverseString("world")).toBe("dlrow");
});

test("handle other types", () => {
  expect(reverseString(323523958)).toBeNull();
});

test("reverse a 'reversed' string", () => {
  expect(reverseString("dlrow")).toBe("world");
});

test("handle empty strings", () => {
  expect(reverseString("")).toBe("");
});

test("handle empty strings", () => {
  expect(reverseString("")).toBe("");
});

test("handle whitespace-only strings", () => {
  expect(reverseString("    ")).toBe("    ");
});

test("handle single characters", () => {
  expect(reverseString("h")).toBe("h");
});

test("handle single characters", () => {
  expect(reverseString("h")).toBe("h");
});

test("handle strings with whitespace ", () => {
  expect(reverseString("h el oo")).toBe("oo le h");
});

test("handle palindromes", () => {
  expect(reverseString("civic")).toBe("civic");
});
