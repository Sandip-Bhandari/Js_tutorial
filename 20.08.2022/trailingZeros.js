(function () {
  function getTrailingZeroes(num) {
    let zeroes = 0;

    for (let i = 5; Math.floor(num / i) >= 1; i = i * 5) {
      zeroes += Math.floor(num / i);
    }

    return zeroes;
  }

  console.log(getTrailingZeroes(5));
  console.log(getTrailingZeroes(10));
  console.log(getTrailingZeroes(8));
  console.log(getTrailingZeroes(4));
  console.log(getTrailingZeroes(12));
})();
