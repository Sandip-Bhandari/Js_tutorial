(function () {
  function binomial(num, K) {
    if (K > num) return 0;
    if (K == 0 || K == num) return 1;
    return binomial(num - 1, K - 1) + binomial(num - 1, K);
  }
  console.log(binomial(6, 3));
})();
