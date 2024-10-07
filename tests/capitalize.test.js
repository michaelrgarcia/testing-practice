import capitalize from "../src/capitalize.js";

test("capitalizes first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});

test("handles whitespace", () => {
  expect(capitalize("  ")).toBe("  ");
});

test("capitalizes a single char string", () => {
  expect(capitalize("h")).toBe("H");
});

test("do nothing to all caps string", () => {
  expect(capitalize("HELLO")).toBe("HELLO");
});

test("handle other types", () => {
  expect(capitalize(34535435)).toBeNull();
});

test("handle weird string", () => {
  expect(capitalize("^Y*$^@66ffhd**^DHI")).toBe("^Y*$^@66ffhd**^DHI");
});
