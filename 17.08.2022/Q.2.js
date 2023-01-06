//Problem 2 –
//Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.

(function () {
  function checkResult(marks) {
    return marks >= 40 ? "passed" : "failed";
  }
  // let output = checkResult(41);
  // console.log(output);

  console.log(checkResult(41));
  console.log(checkResult(4));
})();
