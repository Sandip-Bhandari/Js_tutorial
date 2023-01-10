// Given 2 numbers as input. You need to find if they have opposite signs or not.
// Input -> +123, -12
// Output -> true

(function () {
  function checkSigns(x, y) {
    return (x ^ y) < 0;
  }

  // Driver Code

  let x = 123,
    y = -12;

  console.log(checkSigns(x, y));
})();
