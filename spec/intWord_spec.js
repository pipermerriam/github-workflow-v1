var CQL = require("../index");

describe("CQL.intWord", function() {
  it("Converts 1000 to 1 thousand", function() {
    expect(CQL.intWord(1000)).toBe("1 thousand");
  });
  it("Converts 100 to 1 hundred", function(){
    expect(CQL.intWord(100)).toBe("1 hundred");
  });

});
