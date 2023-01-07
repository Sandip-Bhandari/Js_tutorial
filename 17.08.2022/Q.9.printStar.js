// Problem 9 –
// Create a pattern using ‘*’ as shown below using loops.
// *
// **
// ***
// ****
// *****
(function () {
  function printStars(noOfStars) {
    for (let i = 1; i <= 5; i++) {
      for (let j = 0; j < i; j++) {
        document.write("*");
        // console.log("*");
      }
      document.write("<br/>");
      //console.log("/n");
    }
  }

  printStars(5);
})();
