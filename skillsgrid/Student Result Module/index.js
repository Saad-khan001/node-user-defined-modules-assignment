const {calculateTotal, calculatePercentage, calculateGrade} = require ("./module.js");


let myTotal = calculateTotal(90, 80, 70);
let myPercentage = calculatePercentage(myTotal);
let myGrade = calculateGrade(myPercentage);

console.log("---Student Result Module---");
console.log("Total Marks (out of 300):", myTotal);
console.log("Percentage:", myPercentage.toFixed(2) + "%");
console.log("Grade Secured:", myGrade);