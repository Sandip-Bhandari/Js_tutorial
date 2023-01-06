(function IncresingOrder_DereasingOrder() {
  var a, b, c;
  var num = document.getElementById("num").value;
  if (a < b && b < c) {
    console.log("Increasing order");
  } else if (a > b && b > c) {
    console.log("Decreasing order");
  } else {
    console.log("Neither increasing or decreasing order");
  }
})();
