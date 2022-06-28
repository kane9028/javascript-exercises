const leapYears = function(year) {
    // divisible by four but not 100
    let condition1 = year%4 === 0 && year%100 !== 0;
    // divisible by 400
    let condition2 = year%400 === 0;
    return condition1 || condition2;
};

// Do not edit below this line
module.exports = leapYears;
