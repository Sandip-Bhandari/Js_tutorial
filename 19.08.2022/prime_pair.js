//Problem Statement:
//Given a number A which is an even integer, you need to print two prime numbers whose sum will be
//equal to A.
//Constraint: A>2

(function () {
  function isPrime(number) {
    let prime = true;
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }

  function getPairs(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (isPrime(i) && isPrime(number - i)) {
        console.log(`The pair is ${i} and ${number - i} `);
      }
    }
  }

  //getPairs(15);

  console.log(isPrime(351));
})();
