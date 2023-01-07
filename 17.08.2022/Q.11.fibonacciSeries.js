//Problem 11 –
//Create Fibonacci series of 5 and 8.

//Hint : The Fibonacci sequence is a series of numbers in which each number is the sum of the two that
//precede it. Starting at 0 and 1, the sequence looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on
//forever.

(function () {
  // 0 1 1
  function fibonacci(number) {
    let previous = 0,
      current = 1,
      output = 0;
    console.log(previous); // 0
    console.log(current); // 1
    for (let i = 1; i <= number; i++) {
      output = previous + current;
      console.log(output); //2
      previous = current;
      current = output;
    }
  }

  console.log(fibonacci(5));
})();
