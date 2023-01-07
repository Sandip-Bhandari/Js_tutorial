//Problem 5 –
//Create a program to REVERSE a string.
//Solution –
//Traverse the input string from last index and add each character to a new string. Print the new
//reversed string.

(function () {
  function reverseString(str) {
    let updatedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      updatedString = updatedString + str[i];
    }

    return updatedString;
  }

  console.log(reverseString("Coding is fun"));
  console.log(reverseString("Bruce wayne is batman"));
})();
