import calculator from "../src/calculator.js";

test("add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("subtract two numbers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test("multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test("divide two numbers", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test("divide by zero", () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by 0");
});