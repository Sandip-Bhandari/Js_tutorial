(function () {
  function getQuadraticEquation(a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant == 0) {
      return -b / (2 * a);
    } else if (discriminant > 0) {
      var root1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
      var root2 = -b + (Math.sqrt(discriminant) / 2) * a;
      return {
        root1,
        root2,
      };
    } else {
      return " No roots";
    }
  }

  console.log("getQuadraticEquation(1,5,1) " + getQuadraticEquation(1, 5, 1));
})();
