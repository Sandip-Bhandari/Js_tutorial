(function () {
  var temp = 21;
  function temprature() {
    if (temp >= 20 || temp <= 25) {
      console.log("Go to play outside");
    } else if (temp >= 18 || temp <= 20 || raining) {
      console.log("Go to play at  school");
    } else {
      console.log("Stay at home");
    }
  }

  temprature();
})();
