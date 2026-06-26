import reverseString from "../src/reverseString.js";

test("reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("reverse an empty string", () => {
    expect(reverseString("")).toBe("");
});

test("reverse a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});