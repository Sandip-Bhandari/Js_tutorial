// Problem -
// Given the length of three line segments as a, b, c. FInd if they can form a triangle or not?
// (students are not expected to take any user input, solve the problem using hardcoded value)
(function () {
  function checkIfTriangle(a, b, c, True) {
    // if (b + c <= a || a + c <= b || a + b <= c) {
    //   return false;
    // } else {
    //   return true;
    // }

    !(b + c <= a || a + c <= b || a + b <= c ? True : false);
  }
  let a = 7,
    b = 1,
    c = 11;
  if (checkIfTriangle(a, b, c)) {
    console.log("Triangle");
  } else {
    console.log("Not Triangle");
  }
  console.log(checkIfTriangle());
})();
