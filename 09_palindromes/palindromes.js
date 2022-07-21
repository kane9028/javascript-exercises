const palindromes = function (str) {
  let strOfLetters = str.replace(/[^\w]/g, '').toLowerCase();

  let reverse = strOfLetters.split('').reduce((arr, letter)=>{
    arr.unshift(letter);
    return arr;
  }, []).join('');

  return strOfLetters === reverse;
};

// Do not edit below this line
module.exports = palindromes;