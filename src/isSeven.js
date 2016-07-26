function isPrime(value) {
  "use strict";
  var i;
  for (i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

function isSeven(value) {
  "use strict";
  /*
   *  Returns boolean as to whether the provided value is the number 7.
   */
  if (value < 10 && value > 5 && isPrime(value)) {
    return true;
  }
  return false;
}

module.exports = isSeven;
