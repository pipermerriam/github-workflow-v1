var CQL = require("../index");

describe("CQL.greet", function() {
  it("Returns a greeting for the provided name", function() {
    expect(CQL.greet('Piper')).toEqual("Hello Piper");
  });
});
