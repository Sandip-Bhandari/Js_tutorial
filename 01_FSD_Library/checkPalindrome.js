//write a program to check if s number is palindrome using recursion;
// Example-1    Input: 121  =>  output: yes
// Example-2    Input: 122  =>  output: no

(function () {
  // n => original number
  // rev => reverse number. Initial value will be 0.

  function reverse(n, rev) {
    // Base case
    if (n == 0) {
      return rev;
    }
    //Self Work
    rev = rev * 10 + (n % 10);
    return reverse(Math.floor(n / 10), rev);
  }

  let n = 1122334332211;
  let reverseNumber = reverse(n, 0);

  if (n == reverseNumber) {
    console.log("Yes");
  } else {
    console.log("No");
  }
})();
