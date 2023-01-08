//Problem Statement:
//Given the value of n, find out the nth term of the fibonacci series.
//Fibonacci series is like 0,1,1,2,3,5,8,13… where the next element is always the sum of the previous two
//elements and the first two elements are 0 and 1.

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
