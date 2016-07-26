var CQL = require("../index");

describe("CQL.isSeven", function() {
  it("Returns true for the number 7", function() {
    expect(CQL.isSeven(7)).toBe(true);
  });
});
