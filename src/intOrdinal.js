function intOrginal(value) {

  //   Function suffixes and returns a ordinal value;

  "use strict";


  var Ordinal;
  if((value%100 >= 11) && (value%100 <=20)) {
    Ordinal = value + "th"
    return Ordinal;
  }
  value = value%10;
  switch (value) {

      case 1:

          Ordinal = value +  "st";
          break;

      case 2:

          Ordinal = value + "nd";
          break;

      case 3:

            Ordinal = value + "rd";
            break;

      default:

              Ordinal = value + "th";
              break;

  }
  console.log("Ordinal value is ",Ordinal);
  return Ordinal;

  //this is a change test comment
  /*
   *  Converts an integer to an ordinal representation
   *  1 => 1st
//swit

   *  2 => 2nd
   *  3 => 3rd
   */
  /*jslint unparam: true*/
  return "1st";
}

module.exports = intOrginal;
