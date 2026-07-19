const {findSum, findMaximum, findMinimum} = require('./module');

console.log("---Array Utility Module---");


const myNumbers = [ 12, 45, 7, 92, 23, 5];

console.log("Given Array;", myNumbers);
console.log("Sum of Array;", findSum(myNumbers));
console.log("Maximum Number;", findMaximum(myNumbers));
console.log("Minimum Number;", findMinimum(myNumbers));
