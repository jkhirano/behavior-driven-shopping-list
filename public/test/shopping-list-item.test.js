const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

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
  it("should have a function named check", function() {
    expect(foo.check).to.be.a("function");
  });
});

describe('Check Method', function() {
  let foo = new ShoppingListItem('Beer', 'Refreshing Beverage');
  foo.check();
  it('Check method should set isDone property to true', function() {
    expect(foo.isDone).to.equal(true);
  });
});

describe('Uncheck Method', function() {
  let foo = new ShoppingListItem('Beer', 'Refreshing Beverage');
  foo.uncheck();
  it('Uncheck method should set isDone property to false', function() {
    expect(foo.isDone).to.equal(false);
  });
});
