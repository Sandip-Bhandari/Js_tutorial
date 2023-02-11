(function () {
  function getSweetEqual(num) {
    if (num % 2 == 0) {
      console.log("You can distribute in equal amount");
    } else {
      console.log("You can't");
    }
    // return num % 2 == 0 ? "yes" : "No";
  }

  console.log(getSweetEqual(10));
})();
