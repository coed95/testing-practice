import reverseString from "../reverseString.js";

describe("capitalize function", () => {
    test("should reverse the string", () => {
        const result = reverseString("hello");
        expect(result).toBe("olleh");
    });

    test("should handle empty strings", () => {
        const result = reverseString('');
        expect(result).toBe('');
    });

    test('should throw an error for null', () => {
        expect(() => {
            reverseString(null);
        }).toThrow('Input should be a string');
    });

    test('should throw an error for undefined', () => {
        expect(() => {
            reverseString(undefined);
        }).toThrow('Input should be a string');
    });

    test('should throw an error for a number', () => {
        expect(() => {
            reverseString(123);
        }).toThrow('Input should be a string');
    });

    test('should throw an error for a boolean', () => {
        expect(() => {
            reverseString(true);
        }).toThrow('Input should be a string');
    });
});