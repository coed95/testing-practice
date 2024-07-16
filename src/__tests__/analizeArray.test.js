import analizeArray from "../analizeArray";

describe('analizeArray', () => {
    test('returns correct result for array with positive numbers', () => {
        const result = analizeArray([1, 2, 3, 4, 5]);
        expect(result).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    test('returns correct result for array with negative numbers', () => {
        const result = analizeArray([-5, -3, -1, -2, -4]);
        expect(result).toEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 5
        });
    });

    test('returns correct result for array with mixed numbers', () => {
        const result = analizeArray([-1, 2, 0, -3, 5]);
        expect(result).toEqual({
            average: 0.6,
            min: -3,
            max: 5,
            length: 5
        });
    });

    test('returns null values for empty array', () => {
        const result = analizeArray([]);
        expect(result).toEqual({
            average: null,
            min: null,
            max: null,
            length: 0
        });
    });

    test('throws an error for non-array input', () => {
        expect(() => analizeArray(123)).toThrow('Input should be an array');
        expect(() => analizeArray({})).toThrow('Input should be an array');
        expect(() => analizeArray("string")).toThrow('Input should be an array');
    });
});