//Problem 12 –
//Write power function for any positive integer
//Hint : Power function F(x^n) = x*x*x…n times; where x is the base and n is the exponent

(function () {
  function power(base, exponent) {
    if (exponent == 0) return 1;

    let output = 1;
    while (exponent > 0) {
      output = output * base;
      exponent--;
    }

    return output;
  }

  console.log(power(5, 2)); //25
  console.log(power(2, 2)); //4
  console.log(power(1, 2)); //1
  console.log(power(6, 2)); //36
  console.log(power(9, 0)); //1
})();
