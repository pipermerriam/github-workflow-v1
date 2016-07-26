function intComma(value) {
  "use strict";
  /*
   *  Converts an integer to a string with commas every 3 digits.
   */
  var stringValue = value.toString(),
    segments = [];

  while (stringValue.length > 2) {
    segments.push(stringValue.substring(stringValue.length - 3));
    stringValue = stringValue.substring(0, stringValue.length - 3);
  }
  segments.push(stringValue);
  return segments.reverse()
    .join(',')
    .replace(/^,/, '');
}

module.exports = intComma;
