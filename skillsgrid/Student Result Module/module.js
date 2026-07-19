function calculateTotal(mark1, mark2, mark3) {
    return mark1 + mark2 + mark3;
}

function calculatePercentage(totalmarks) {
    let percentage = (totalmarks / 300) * 100;
    return percentage;
}

function calculateGrade(percentage) {

    if (percentage >= 90) {

        return "A+";

    }

    else if (percentage >= 80) {
        return "A";
    }

    else if (percentage >= 70) {
        return "B";
    }

    else if (percentage >= 60) {

        return "C";
    }

    else if (percentage >= 50) {
        return "D";
    }

    else {
        return "Fail";
    }


}


module.exports = {
    calculateTotal,
    calculatePercentage,
    calculateGrade
}

