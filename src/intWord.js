function intWord(value) {
  "use strict";
  /*
   *  Converts an integer to a friendly text representation
   */
  value = value.toString();
  var units = "",
    firstDigit = value.slice(0, 1),
    appendWith = value.slice(1);
  if (appendWith.length === 3) {
    units = "thousand";
  }
  if (appendWith.length === 2) {
    units = "hundred";
  }

  return firstDigit + " " + units;
}

module.exports = intWord;
