function intWord(value) {
  "use strict";
  /*
   *  Converts an integer to a friendly text representation
   */
   var units = "";
   value = value.toString();

   var firstDigit = value.slice(0, 1);
   var appendWith = value.slice(1);
   if (appendWith.length === 3) {
     units = "thousand";
   }
   if (appendWith.length === 2) {
     units = "hundred";
   }

   return firstDigit + " " + units;
}

module.exports = intWord;
