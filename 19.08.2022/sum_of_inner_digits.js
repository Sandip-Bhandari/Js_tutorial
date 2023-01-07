//Problem Statement:
//Given a positive number you need to write a program in javascript to find the sum of the inner digits of
//that number

(function () {
  function getInnerDigitsSum(num) {
    var sum = 0;

    if (num.toString().length < 3) {
      return -1;
    }
    do {
      num = parseInt(num / 10);
      sum = sum + (num % 10);
    } while (parseInt(num / 100) != 0);
    return sum;
  }

  console.log(getInnerDigitsSum(25645));
  console.log(getInnerDigitsSum(21745));
  console.log(getInnerDigitsSum(21245));
  console.log(getInnerDigitsSum(2145));
  console.log(getInnerDigitsSum(215));
  console.log(getInnerDigitsSum(25));
})();
