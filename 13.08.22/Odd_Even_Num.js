(function printNumbers() {
  for (var counter = 1; counter < 11; counter++) {
    console.log(counter);
  }
})();
(function printOddNumbers() {
  for (var counter = 1; counter < 11; counter += 2) {
    console.log(counter);
  }
})();
(function printEvenNumbers() {
  for (var counter = 2; counter < 11; counter += 2) {
    console.log(counter);
  }
})();
