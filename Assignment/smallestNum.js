// Given 3 numbers. You need to find the smallest of three numbers without using comparison
// operators
// Input -> 12,44,2
// Output -> 2

(function () {
  let CHAR_BIT = 8;

  function min(x, y) {
    return y + ((x - y) & ((x - y) >> (32 * CHAR_BIT - 1)));
  }

  function smallest(x, y, z) {
    return Math.min(x, Math.min(y, z));
  }

  let x = 12,
    y = 44,
    z = 2;

  console.log("Smallest of 3 numbers is " + smallest(x, y, z));
})();
