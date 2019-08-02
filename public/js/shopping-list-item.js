class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check = function() {
    this.isDone = true;
  };

  uncheck = function() {
    this.isDone = false;
  };

  render = function(){
    return `<ul><li class="completed_${this.isDone}"><span>${this.name}</span><span>${this.description}.</span></li><ul>`;
  }
}
