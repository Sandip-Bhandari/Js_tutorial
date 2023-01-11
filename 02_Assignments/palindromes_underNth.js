//Create a program to print all the palindromes under 50.

(function () {
  function isPalindrome(num) {
    let length = num.length;
    for (let idx = 0; idx < length / 2; idx++) {
      if (num[idx] !== num[length - 1 - idx]) {
        return false;
      }
    }
    return true;
  }
  for (let i = 1; i <= 50; i++) {
    if (isPalindrome(i.toString())) {
      console.log(i);
    }
  }
})();
