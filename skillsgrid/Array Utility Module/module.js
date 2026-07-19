// function findSum



function findSum (array) {
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum = sum + array [i];
}
return sum;

}




// function findMaximum


function findMaximum (array) {
    if (array.length === 0) return null;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array [i] > max) {
            max = array [i];
        }
    }

    return max;
}



// function findMinimum


function findMinimum (array) {
    if (array.length === 0) return null;
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array [i] < min) {
            min = array [i];
        }
    }

    return min;
}

module.exports = {
    findSum,
    findMaximum,
    findMinimum
}