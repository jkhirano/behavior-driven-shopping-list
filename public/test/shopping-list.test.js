// const expect = chai.expect;
// const assert = chai.assert;
// const should = chai.should();

describe("ShoppingList", function() {
  let foo = new ShoppingList();

  it("ShoppingList should be a class", function() {
    expect(foo).to.be.instanceOf(ShoppingList);
  });

  it("ShoppingList should contain property 'items'", function() {
    expect(foo).to.haveOwnProperty("items");
  });

  it("ShoppingList should initialize as an empty Array", function() {
    expect(foo.items).to.be.instanceOf(Array);
    expect(foo.items.length).to.equal(0);
  });
});
