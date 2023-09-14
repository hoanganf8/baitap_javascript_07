var numbers = [5, 10, 15, 20, 25, 30];

Array.prototype.filter2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }

  var newArr = [];

  if (this.length) {
    for (var index = 0; index < this.length; index++) {
      var value = this[index];
      var result = callback(value, index);
      if (result) {
        newArr[newArr.length] = this[index];
      }
    }
  }

  return newArr;
};

var result = numbers.filter2(function (number, index) {
  return number > 15;
});

console.log(result);
