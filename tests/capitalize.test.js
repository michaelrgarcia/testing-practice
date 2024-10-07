import capitalize from "../src/capitalize.js";

test("capitalizes first character", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("rejects empty string", () => {
    expect(capitalize("")).toBeNull();
});

