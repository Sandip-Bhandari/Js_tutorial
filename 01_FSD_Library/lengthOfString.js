//Write a program to find the lenght of string using recursion.

(function () {
  function lengthOfString(str) {
    if (str == "") {
      // Base Case
      return 0;
    }
    let res = lengthOfString(str.substring(1)); // Recursive call of smaller problem

    return res + 1; // self work
  }

  console.log(lengthOfString("programming"));
})();
