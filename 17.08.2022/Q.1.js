//Problem 1 –
//Create a program which gives output for children to go out in park if the temperature is between 20
//degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if
//the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they
//should not step out of the home.
(function () {
  let temp = 20;
  let isRaining = true;
  function playSchool() {
    if (temp >= 20 && temp <= 25 && isRaining) {
      console.log("Go to play outside");
    } else if (temp >= 18 && temp <= 20 && isRaining) {
      console.log("Go to play at  school");
    } else {
      console.log("Stay at home");
    }
  }

  playSchool();
})();
