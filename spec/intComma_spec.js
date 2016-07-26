var CQL = require("../index");

describe("CQL.intComma", function() {
  it("Converts 1000 to 1,000", function() {
    expect(CQL.intComma(1000)).toEqual("1,000");
  });
});
