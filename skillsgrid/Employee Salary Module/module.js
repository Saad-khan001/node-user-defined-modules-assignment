function calculateYearlySalary (monthlySalary) {
    return monthlySalary * 12;
}

function calculateBonus(monthlySalary) {
    return monthlySalary * 2;
}

module.exports = {
    calculateYearlySalary,
    calculateBonus
}