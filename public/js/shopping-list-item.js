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

  render = function() {
    return `<li class="completed_${this.isDone}"><span>${this.name}</span>
<span>${this.description}</span><input type="checkbox" class="check"><button class="rmvButton">x</button></li>`;
  };
}