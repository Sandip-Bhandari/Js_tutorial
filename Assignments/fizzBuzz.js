// To print "FizzBuzz" if i is a multiple of both 3 and 5,
// "Fizz" if i is a multiple of 3 (but not 5),
// "Buzz" if i is a multiple of 5 (but not 3), and the
// value of i if it is not a multiple of 3 or 5 in
// javascript, you can use a for loop and the modulus
// operator to check for divisibility. The syntax would be as follows:

(function () {
  let n = 15;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
})();
