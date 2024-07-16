import capitalize from "../capitalize.js";

describe("capitalize function", () => {
    test("should capitalize the first letter of a string", () => {
        const result = capitalize("hello");
        expect(result).toBe("Hello");
    });

    test("should handle empty strings", () => {
        const result = capitalize('');
        expect(result).toBe('');
    });

    test('should throw an error for null', () => {
        expect(() => {
            capitalize(null);
        }).toThrow('Input should be a string');
    });

    test('should throw an error for undefined', () => {
        expect(() => {
            capitalize(undefined);
        }).toThrow('Input should be a string');
    });

    test('should throw an error for a number', () => {
        expect(() => {
            capitalize(123);
        }).toThrow('Input should be a string');
    });

    test('should throw an error for a boolean', () => {
        expect(() => {
            capitalize(true);
        }).toThrow('Input should be a string');
    });
});