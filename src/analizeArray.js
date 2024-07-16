function analizeArray(array) {
    if (Array.isArray(array) === false) {
        throw new Error("Input should be an array");
    }

    if (array.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0
        };
    }

    const length = array.length;
    const sum = array.reduce((accumulator, value) => accumulator + value, 0);
    const average = sum / length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    return {
        average,
        min,
        max,
        length
    };
}

export default analizeArray;