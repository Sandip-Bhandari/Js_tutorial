(function () {
  function maxProfit(prices, size) {
    var maxProfit = 0;

    for (i = 1; i < size; i++)
      if (prices[i] > prices[i - 1]) maxProfit += prices[i] - prices[i - 1];
    return maxProfit;
  }

  var price = [200, 280, 360, 410, 140, 535, 695];
  var n = price.length;

  console.log(maxProfit(price, n));
})();
