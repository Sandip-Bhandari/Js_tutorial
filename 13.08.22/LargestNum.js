(function () {
  function largest(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }

  console.log("largest(4, 78, 9)" + largest(4, 78, 9));
  console.log("largest(41, 8, 19)" + largest(41, 8, 19));
  console.log("largest(41, 28, 95)" + largest(41, 28, 95));
  console.log("largest(35, 65, 85)" + largest(35, 65, 85));
})();
