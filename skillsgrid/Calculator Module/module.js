// Addition

function add(a, b) {     
    return a + b;
}


// Subtraction
function subtract(a, b) {
    return a - b;
} 

// Multiplication

function multiply(a, b) {
    return a * b;
}

// Division

function divide(a, b) {
    if (b === 0) {
        return ("It can not be divided by zero")

    }
    return a / b;
}


// Function Exporting to index.js
module.exports = {
    add,
    subtract,
    multiply,
    divide
}