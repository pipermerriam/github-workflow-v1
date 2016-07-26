var CQL = require("../index");

describe("CQL.intOrdinal", function() {
  it("Converts 1 to 1st", function() {
    expect(CQL.intOrdinal(1)).toEqual('1st');
  });

  xit("Converts 2 to 2nd", function() {
  });

  xit("Converts 3 to 3rd", function() {
  });
});
