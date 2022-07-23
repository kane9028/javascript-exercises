const findTheOldest = function(arr) {
  let date = new Date();
   return arr.reduce((result, obj) => {
    let age1 = 0;
    let age2 = 0;
    if(result.yearOfDeath){
      age1 = result.yearOfDeath - result.yearOfBirth;
    } else {
      age1 = date.getFullYear() - result.yearOfBirth;
    }
    if(obj.yearOfDeath){
      age2 = obj.yearOfDeath - obj.yearOfBirth;
    } else {
      age2 = date.getFullYear() - obj.yearOfBirth;
    }
    console.log(result.yearOfDeath, age1);
    if (age2 > age1) {
      return obj;
    } else {
      return result;
    }    
  });
};

// Do not edit below this line
module.exports = findTheOldest;
