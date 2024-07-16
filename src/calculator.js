const calculator = {
    validate: function(a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Both arguments must be numbers");
        }
    },

    add: function(a, b) {
        this.validate(a, b);
        return a + b;
    },

    subtract: function(a, b) {
        this.validate(a, b);
        return a - b;
    },

    multiply: function(a, b) {
        this.validate(a, b);
        return a * b;
    },

    divide: function(a, b) {
        this.validate(a, b);

        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }

        return a / b;
    }
};

export default calculator;