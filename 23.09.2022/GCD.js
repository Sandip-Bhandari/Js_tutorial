(function () {
  function gcd(a, b) {
    while (a != b) {
      if (a > b) {
        a = a - b;
      } else if (a < b) {
        b = b - a;
      }
    }
    return a;
  }
  console.log(gcd(25, 15));
  console.log(gcd(24, 16));
})();
