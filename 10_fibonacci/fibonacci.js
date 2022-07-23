const fibonacci = function(num) {
  if(num<0) return "OOPS";
  let resultArray = [];
  for (let i = 0; i<num; i++) {
    if(i===0){
      resultArray.push(1);  
    }
    else if(i===1){
      resultArray.push(1);  
    }
    else {
      resultArray.push(resultArray[i-1]+resultArray[i-2]);
    }
  
  }
  return resultArray[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
