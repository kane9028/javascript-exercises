const sumAll = function(int1, int2) {
    if(typeof int1 !== "number" || typeof int2 !== "number" || int1 < 0 || int2 < 0) {
        return "ERROR";
    }
    //without loop
    // let sum = (int1 + int2) * (Math.abs(int1 - int2) + 1)/2;
    // return sum;

    //with loop
    let sum = 0;
    if(int1 >= int2) {
        for(let i = int2; i <= int1; i++) {
            sum += i;
        }
    } else {
        for(let i = int1; i <= int2; i++) {
            sum += i;
        }
    }
    return sum;
    
};
console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
