import caesarCipher from "../src/caesarCipher.js";

test("caesar cipher", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("caesar cipher with negative value", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
});

test("caesar cipher with large value", () => {
    expect(caesarCipher("abc", 26)).toBe("abc");
});

test("caesar cipher with large negative value", () => {
    expect(caesarCipher("abc", -26)).toBe("abc");
});

test("caesar cipher with string", () => {
    expect(caesarCipher("abc", "1")).toBe("bcd");
});

test("caesar cipher with empty string", () => {
    expect(caesarCipher("", 1)).toBe("");
});

test("caesar cipher with spaces", () => {
    expect(caesarCipher("abc def", 1)).toBe("bcd efg");
});

test("caesar cipher with special characters", () => {
    expect(caesarCipher("abc!@#", 1)).toBe("bcd!@#");
});

test("caesar cipher with uppercase letters", () => {
    expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test("caesar cipher with mixed case letters", () => {
    expect(caesarCipher("aBc", 1)).toBe("bCd");
});