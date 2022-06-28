const removeFromArray = function(arr, ...arg) {
    //loop throuch arr. For each element in arr, if it is not found in arguments, push it into the result array
    let result =[];
    let argumentsArray = [...arg];
    arr.forEach(function(el){
        if (argumentsArray.indexOf(el) === -1) result.push(el);
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
