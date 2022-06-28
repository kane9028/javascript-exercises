const reverseString = function(str) {
    //split str into an array
    let arrOfStr = str.split("");
    //reverse the array
    arrOfStr.reverse()
    //join the reversed array
    let result = arrOfStr.join("");
    return result;
};
console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
