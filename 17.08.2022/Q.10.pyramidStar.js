//Problem 10 –
//Create a pattern using ‘*’ as shown below using loops.
//    *
//   ***
//  *****
// *******
//*********

(function () {
  let number_of_row = 5; // You can take input from promt or change the value
  let output_string = "";
  // External loop
  for (let row_first = 1; row_first <= number_of_row; row_first++) {
    // printing spaces
    for (let columns = number_of_row; columns > row_first; columns--) {
      output_string += " ";
    }
    //printing star
    for (let space_bet = 0; space_bet < row_first * 2 - 1; space_bet++) {
      output_string += "*";
    }
    output_string += "<br/>";
  }
  document.write(`<pre>${output_string}</pre>`);
})();
