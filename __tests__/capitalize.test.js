import capitalize from "../src/capitalize.js";

test("capitalize the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalize an empty string", () => {
    expect(capitalize("")).toBe("");
});

test("capitalize a string with spaces", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});