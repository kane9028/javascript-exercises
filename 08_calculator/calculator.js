const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  if(!arr[0]) return 0;
	return arr.reduce((sum,el) => {
    return sum + el;
  })
};

const multiply = function(arr) {
  return arr.reduce((pro,el) => {
    return pro * el;
  })
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0 ) return 1;
  let result = num;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
