var CQL = require("../index");

describe("CQL.intOrdinal", function() {
  it("Converts 1 to 1st", function() {
    expect(CQL.intOrdinal(1)).toEqual('1st');
  });

  it("Converts 2 to 2nd", function() {
    expect(CQL.intOrdinal(2)).toEqual('2nd');

  });

  it("Converts 3 to 3rd", function() {
    expect(CQL.intOrdinal(3)).toEqual('3rd');

  });

  it("Converts 4 to 4th", function() {
    expect(CQL.intOrdinal(4)).toEqual('4th');

  });
});
