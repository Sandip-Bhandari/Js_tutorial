//Problem 7 –
//Create a program to get sum of all digits of a number.

(function () {
  function getSumOfDigits(number) {
    //number is 143,14,.... // expectation 1  4  3
    let sum = 0;
    while (number >= 1) {
      sum = sum + (number % 10); // 3 + 4 + 1
      number = parseInt(number / 10); // 14 1 0
    }

    return sum;
  }

  console.log(getSumOfDigits(143)); //8
  console.log(getSumOfDigits(14)); //5
  console.log(getSumOfDigits(1289)); //20
  console.log(getSumOfDigits(104)); //5
  console.log(getSumOfDigits(11111)); //5
})();
