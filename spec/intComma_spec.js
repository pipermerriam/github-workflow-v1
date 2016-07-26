var CQL = require("../index");

describe("CQL.intComma", function() {
  it("Converts 1000 to 1,000", function() {
    expect(CQL.intComma(1000)).toEqual("1,000");
  });

  it("Converts 20000 to 20,000", function() {
    expect(CQL.intComma(20000)).toEqual("20,000");
  });

  it("Converts 300000 to 300,000", function() {
    expect(CQL.intComma(300000)).toEqual("300,000");
  });

  it("Converts 4000000 to 4,000,000", function() {
    expect(CQL.intComma(4000000)).toEqual("4,000,000");
  });
});
