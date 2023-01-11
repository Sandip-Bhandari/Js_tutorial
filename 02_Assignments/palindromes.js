// Create a program to print all the palindromes under 50.
//  Palindrome - A number which read same from backwards as well as forwards
//  Output - 1,2,3,4,5,6,7,8,9,11,22,33,44

(function () {
  function checkPalindrome(str) {
    var len = str.length;

    for (i = 0; i < len / 2; i++) {
      if (str.charAt(i) != str.charAt(len - i - 1)) return false;
    }
    return true;
  }

  for (j = 1; j <= 50; j++) {
    if (checkPalindrome(j.toString())) {
      console.log(j);
    }
  }
})();
