// 1.Create a basic calculator program using Javascript
// 2.Use different arithmetic operators and variables to show working of calculator
(function () {
  let num1 = parseFloat(prompt("Enter num1: "));
  let num2 = parseFloat(prompt("Enter num2: "));
  const operation = prompt("Select the operator in promot (+, - , * , /): ");
  let result;
  if (operation == "-") {
    result = num1 - num2;
  } else if (operation == "+") {
    result = num1 + num2;
  } else if (operation == "/") {
    result = num1 / num2;
  } else {
    result = num1 * num2;
  }
  console.log(`${num1} ${operation} ${num2} = ${result}`);
})();
