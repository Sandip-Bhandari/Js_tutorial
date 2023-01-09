// Given a positive integer NUM, find a pair of integers a, G such thatF
// a and b ae positiveF
// a <= bF
//a^2 + b^2 = NUMF
// 0<=NUM<=100000
// Input - 50
// Output - (1,7) , (5,5)
// Explanation -
// 1^2 + 7^2 = 50
// 5^2 + 5^2 = 50

(function () {
  function squareSum(num) {
    var a = 0;
    while (a * a < num) {
      var b = 0;
      while (b * b < num) {
        if (a * a + b * b == num) {
          if (a <= b) {
            console.log(a + "," + b);
          }
        }
        b += 1;
      }
      a += 1;
    }
  }

  squareSum(50);
})();
