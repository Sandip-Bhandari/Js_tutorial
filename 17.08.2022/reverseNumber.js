//Create a program to REVERSE a number.
(function () {
  function reverseNumber(num) {
    let reverseNumber = "";
    for (let i = num.length - 1; i >= 0; i--) {
      reverseNumber = reverseNumber + num[i];
    }

    return reverseNumber;
  }

  console.log(reverseNumber("16687276976466"));
  console.log(reverseNumber("675612387387378"));
})();
