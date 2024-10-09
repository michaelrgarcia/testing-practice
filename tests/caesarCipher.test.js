import caesarCipher from "../src/caesarCipher";

test("encrypts a word with shift factor 3", () => {
  expect(caesarCipher("hello", 3)).toStrictEqual("khoor");
});

test("wrapping works", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("ignores punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("ignores numbers", () => {
  expect(caesarCipher(12345, 3)).toBeUndefined();
});

test("ignores numbers", () => {
  expect(caesarCipher(12345, 3)).toBeUndefined();
});

test("big shift factor", () => {
  expect(caesarCipher("metroid prime", 15)).toBe("btigdxs egxbt");
});

test("shift factor 0", () => {
  expect(caesarCipher("samus", 0)).toBe("samus");
});

test("negative shift factor", () => {
  expect(caesarCipher("not supposed to work", -5)).toBe("not supposed to work");
});
