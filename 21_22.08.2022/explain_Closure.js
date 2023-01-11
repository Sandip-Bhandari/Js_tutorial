(function () {
  function outerFunction() {
    let firstName = "Tony";

    //Closure
    // function innerFunction() {  // 1st way
    return function innerFunction() {
      // 2nd way
      let lastName = "stark";
      console.log(firstName + " " + lastName);
    };

    // return {
    //   innerFunction: innerFunction, //1st way
    //   firstName: firstName,
    // };
  }

  // Invoke(call) the outerFunction -- // 1st way
  // let output = outerFunction();
  // console.log(output.innerFunction());

  outerFunction()(); // invoked innerFunction -- 2nd way
})();
