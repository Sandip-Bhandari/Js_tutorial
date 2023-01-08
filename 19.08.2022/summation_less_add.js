//Problem Statement:
//Given two numbers A and B, You are supposed to find the sum of A and B without using the addition
//operator i.e. `+`
//Example:
//Input A = 10
//B = 5
//Output 15

(function () {
  function getSummationLessAdd(num1, num2) {
    if (num1 < 0 && num2 < 0) {
      console.log("Please put positive number");
    } else {
      let n = num1 < num2 ? num1 : num2;
      let g = num1 > num2 ? num1 : num2;

      while (n != 0) {
        g = ++g;
        n = --n;
        if (g == g + n) {
          return g;
        }
      }

      return Sum;
    }
  }
  console.log(getSummationLessAdd(10, 5));
})();
