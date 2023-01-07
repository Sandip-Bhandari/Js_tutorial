(function () {
  // 0 1 1
  function nfibonacci(number) {
    let previous = 0,
      current = 1,
      output = 0;
    console.log(previous); // 0
    console.log(current); // 1
    for (let i = 3; i <= number; i++) {
      output = previous + current;
      console.log(output); //2
      previous = current;
      current = output;
    }
  }

  console.log(nfibonacci(24)); //("input")
})();
