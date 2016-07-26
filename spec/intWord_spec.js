var CQL = require("../index");

describe("CQL.intWord", function() {
  it("Converts 1000 to 1 thousand", function() {
    expect(CQL.intWord(1000)).toBe("1 thousand");
  });
});
