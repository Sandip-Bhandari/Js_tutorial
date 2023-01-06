(function () {
  function outerFunction(addFunc) {
    var a = 100;
    var b = 50;
    var output = addFunc(a, b); //callback
    console.log(output);
  }

  var add = function (a, b) {
    return a + b;
  };
  outerFunction(add);
})();
