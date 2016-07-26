function intWord(value) {
  "use strict";
  /*
   *  Converts an integer to a friendly text representation
   */
   value = value.toString();

   var firstDigit = value.slice(0, 1);
   var appendWith = value.slice(1);
   if (appendWith.length === 3) {
     var units = "thousand";
   }

   return firstDigit + " " + units;
}

module.exports = intWord;
