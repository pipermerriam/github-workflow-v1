function intOrginal(value) {
  "use strict";

  var Ordinal;
  switch value:

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
  console.log("Orindla",Ordinal);
  return         
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
