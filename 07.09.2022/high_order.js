(function () {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function evenNumber(number, index, arr) {
    console.log("index " + index);
    return number % 2 == 0;
  }

  let output = numbers.filter(evenNumber);
  console.log(output);
})();
