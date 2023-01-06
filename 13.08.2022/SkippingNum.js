//for skipping the value
(function printNumbers() {
  let numbers = [1, 6, 76, 34, 5, 9];
  for (var counter = 0; counter < numbers.length; counter++) {
    if (numbers[counter] == 34) {
      continue;
    }
    console.log(numbers[counter]);
  }
})();
