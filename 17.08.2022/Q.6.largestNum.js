//Problem 6 –
//Create a program to find the largest amongst given 3 numbers
(function () {
  const first_number = 516;
  const second_number = 76;
  const Third_number = 86;
  let largest_number;

  if (first_number >= second_number && first_number >= Third_number) {
    return (largest_number = first_number);
  } else if (second_number >= first_number && second_number >= Third_number) {
    return (largest_number = second_number);
  } else {
    largest_number = Third_number;
  }
  console.log("The largest value of number is " + largest_number);
})();
