const expect = chai.expect;

describe("Shopping Item", function() {
  let foo = new ShoppingListItem();

  it("ShoppingListItem should be a class", function() {
    expect(foo).to.be.instanceOf(ShoppingListItem);
  });

  it("should have a named property", function() {
    expect(foo).to.haveOwnProperty("name");
  });

  it("should have a description property", function() {
    expect(foo).to.haveOwnProperty("description");
  });
  it("should have a isDone property", function() {
    expect(foo).to.haveOwnProperty("isDone");
  });
});
