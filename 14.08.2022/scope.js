(function () {
  var b = 10; //Global scope

  function innerFunction() {
    // functional Scope
    var a = 5; // Inside add function

    if (true) {
      // Block scope
      let m = 20;
      console.log("m = " + m);
    }
    console.log("Outside block = " + m);

    console.log("Outside block a = " + a);
    console.log("Outside block b = " + b);
  }
  //Global function
  innerFunction();
})();
