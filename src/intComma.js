function intComma(value) {
  "use strict";
  /*
   *  Converts an integer to a string with commas every 3 digits.
   */
  var stringValue = value.toString()
  var segments = []
  while (stringValue.length > 2) {
    segments.push(stringValue.substring(-3))
    stringValue = stringValue.substr(0, stringValue.length-3)
  }
  return stringValue.join(',')
}

module.exports = intComma;
