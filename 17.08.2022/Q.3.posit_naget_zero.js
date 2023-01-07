//Problem 3 –
//Create a program to find if the number is positive, negative or zero
(function () {
  function numberCheck(num) {
    switch (true) {
      case num > 0:
        return "Positive Number";
      case num < 0:
        return "Nagetive Number";
      default:
        return "Zero";
        break;
    }
  }
  console.log(numberCheck(89));
  console.log(numberCheck(-9));
  console.log(numberCheck(0));
})();
