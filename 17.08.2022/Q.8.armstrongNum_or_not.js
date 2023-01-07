//Problem 8 –
//Find if a given number is an Armstrong number or not.
//Hint : Armstrong number is a number that is equal to the sum of cubes of its digits

(function () {
  let output_value = 0;
  const input_value = 153;

  //vreate a temporary variable
  let temporary_value = input_value;
  while (temporary_value > 0) {
    //finding the one's digit
    let remainder_value = temporary_value % 10;

    output_value += remainder_value * remainder_value * remainder_value;

    //removing last digit from the number
    temporary_value = parseInt(temporary_value / 10); //convert float into integer
  }
  //check the condition
  if (output_value == input_value) {
    console.log(`${input_value} is an Armstrong number`);
  } else {
    console.log(`${input_value} is not an Armstrong number.`);
  }
})();
