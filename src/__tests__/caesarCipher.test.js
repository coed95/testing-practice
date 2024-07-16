import caesarCipher from "../caesarCipher.js";

describe("caesarCipher", () => {
    test('shifts letters correctly with a positive shift', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test('shifts letters correctly with a negative shift', () => {
        expect(caesarCipher('Hello, World!', -3)).toBe('Ebiil, Tloia!');
    });

    test('wraps from z to a with positive shift', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('wraps from a to z with negative shift', () => {
        expect(caesarCipher('abc', -3)).toBe('xyz');
    });

    test('does not change non-alphabetic characters', () => {
        expect(caesarCipher('123!@#', 5)).toBe('123!@#');
    });

    test('handles large positive shifts correctly', () => {
        expect(caesarCipher('abc', 30)).toBe('efg');
    });

    test('handles large negative shifts correctly', () => {
        expect(caesarCipher('abc', -30)).toBe('wxy');
    });

    test('throws an error if the first argument is not a string', () => {
        expect(() => caesarCipher(123, 3)).toThrow('The first argument must be a string');
        expect(() => caesarCipher({}, 3)).toThrow('The first argument must be a string');
        expect(() => caesarCipher([], 3)).toThrow('The first argument must be a string');
    });

    test('throws an error if the second argument is not a number', () => {
        expect(() => caesarCipher('Hello, World!', '3')).toThrow('The second argument must be a number');
        expect(() => caesarCipher('Hello, World!', {})).toThrow('The second argument must be a number');
        expect(() => caesarCipher('Hello, World!', [])).toThrow('The second argument must be a number');
    });
});