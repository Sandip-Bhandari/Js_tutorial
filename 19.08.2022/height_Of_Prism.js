// Height Of Prism
//Problem Statement:
//Given the volume and perimeter of the triangular base of the prism, and the circumference of the
//inner circle. Calculate the height of the prism.
//Example:
//Input : radius=3, perimeter=15, Volume=270
//Output: 12

(function () {
  function getHeightOfPrism(radius, perimeter, volume) {
    let semiperimeter = perimeter / 2;
    let height = volume / (radius * semiperimeter);
    return height;
  }

  console.log(getHeightOfPrism(3, 15, 270));
})();
