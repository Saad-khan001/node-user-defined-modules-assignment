// Importing Modules from module.js

const {add, subtract, multiply, divide} = require ("./module.js");


console.log("---Task 1: Calculator Module---");
console.log("Addition: 10 + 5;", add(10, 5));
console.log("Subtract: 10 - 5;", subtract(10, 5));
console.log("Multiply: 10 * 5;", multiply(10, 5));
console.log("Divide: 10 / 5;", divide(10, 5));

let result = divide (10, 0);
console.log(result);