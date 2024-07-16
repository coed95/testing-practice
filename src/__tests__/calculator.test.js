import calculator from "../calculator.js";

describe("calculator", () => {
    test("adds two numbers correctly", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test("subtracts two numbers correctly", () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test("multiply two numbers correctly", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("divides two numbers correctly", () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test("throws an error when dividing by zero", () => {
        expect(() => calculator.divide(6, 0)).toThrow("Division by zero is not allowed");
    });

    test('throws an error when non-numeric values are used', () => {
        expect(() => calculator.add(1, 'a')).toThrow('Both arguments must be numbers');
        expect(() => calculator.subtract('a', 1)).toThrow('Both arguments must be numbers');
        expect(() => calculator.multiply(1, {})).toThrow('Both arguments must be numbers');
        expect(() => calculator.divide([], 1)).toThrow('Both arguments must be numbers');
    });
});