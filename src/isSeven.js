function isSeven(value) {
  "use strict";
  /*
   *  Returns boolean as to whether the provided value is the number 7.
   */

  if (value < 10 && value > 5 && isPrime(value)){
    return true;
  } else {
    return false;
  }
}

function isPrime(value){
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

module.exports = isSeven;
