(function printNumbers() {
  let numbers = [1, 6, 76, 34, 5, 9];
  var counter = 1;
  for (var counter = 1; counter < numbers.length; counter++) {
    console.log(numbers[counter]);
    if (numbers[counter] == 34) {
      //break;
    }
  }
})();
