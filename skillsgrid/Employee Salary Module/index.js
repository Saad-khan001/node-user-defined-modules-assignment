const { calculateYearlySalary, calculateBonus} = require('./module');

console.log("---Employee Salary Module---");


let monthly = 70000;
let yearly = calculateYearlySalary(monthly);
let bonus = calculateBonus(monthly);

console.log("Monthly Salary: " + monthly);
console.log("Calculated Yearly Salary: " + yearly);
console.log("Annual Bonus Amount (2 Months): " + bonus);

let totalPackage = yearly + bonus;
console.log("Total Annual Package (Yearly + Bonus): " , totalPackage);