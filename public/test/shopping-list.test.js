// const expect = chai.expect;
// const assert = chai.assert;
// const should = chai.should();

describe('ShoppingList', function() {
  let foo = new ShoppingList();
  it('ShoppingList should be a class', function() {
    expect(foo).to.be.instanceOf(ShoppingList);
  });
  it('ShoppingList should contain property "items"', function() {
    expect(foo).to.haveOwnProperty('items');
  });

  it('ShoppingList Items should initialize as empty array', function() {
    expect(foo.items).to.be.instanceOf(Array);
    expect(foo.items.length).to.equal(0);
  });
});

describe('addItem', function() {
  let foo = new ShoppingList();
  it('Should have a method named addItem', function() {
    expect(foo.addItem).to.be.a('function');
  });
  let sake = new ShoppingListItem('Sake', 'The BEST');
  foo.addItem(sake);
  it('Invoking addItem method should add item to Shopping List', function() {
    foo.items.should.contain(sake);
  });

  it('Should throw error if adding item that is not a Shopping List Item', function() {
    let foo = new ShoppingList();
    expect(foo.addItem.bind('pizza')).to.throw('Wrong');
  });
});

describe('removeItem', function() {
  let foo = new ShoppingList();
  it('Should have a method named removeItem', function() {
    expect(foo.removeItem).to.be.a('function');
  });

  let fruit = new ShoppingListItem('celary', 'sour as hell');
  foo.addItem(fruit);
  foo.removeItem(fruit);
  it('Should remove the the last item in the items list if there is no parameters', function() {
    expect(foo.items).should.not.contain(fruit);
  });

  foo = new ShoppingList();
  foo.items.push('bad thing');
  it('Should throw an error if item is not a ShoppingListItem Object', function() {
    expect(foo.removeItem.bind(foo)).to.throw('Wrong');
  });

  foo = new ShoppingList();
  // fruit = new ShoppingListItem('celary', 'sour as hell');
  sake = new ShoppingListItem('Sake', 'The BEST');
  foo.addItem(fruit);
  foo.addItem(sake);
  
  it('Should remove item from ShoppingList.items if is a ShoppingListItem', function() {
    expect(foo.removeItem(sake)).should.not.contain(sake);
    expect(foo.removeItem(fruit)).should.not.contain(fruit);
  });
  console.log(foo.render());
});



describe('render', function() {
  let foo = new ShoppingList();
  it('Should return concatenated results of the render function of the shopping list items', function(){
    console.log(foo.render());
    let vegetables = new ShoppingListItem('celary', 'sour as hell');
    let sake = new ShoppingListItem('Sake', 'The BEST');
    foo.addItem(vegetables);
    foo.addItem(sake);
    expect(foo.render()).to.equal('<ul><li class="completed_false"><span>celary</span><span>sour as hell.</span></li><li class="completed_false"><span>Sake</span><span>The BEST.</span></li></ul>');
  });
});