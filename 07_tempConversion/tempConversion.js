const ftoc = function(fah) {
  let result = (fah - 32) * 5/9;
  return Math.round(result*10)/10;
};

const ctof = function(cels) {
  let result = cels * 9/5 + 32;
  return Math.round(result*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
