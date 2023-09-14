var users = ["Item 1", "Item 2", "item 3"];

Array.prototype.push2 = function (...tokens) {
  var newArr = this;
  for (var i = 0; i < tokens.length; i++) {
    newArr[newArr.length] = tokens[i];
  }
};

users.push2("Item 4", "Item 5", "Item 6");

console.log(users);
