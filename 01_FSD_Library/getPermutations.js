(function () {
  function getPermutations(str) {
    //Base Case
    if (str.length == 0) {
      let arr = [];
      arr.push("");
      return arr;
    }

    let ch = str.charAt(0); //a
    let ros = str.substring(1); //bc
    let rr = getPermutations(ros); //[bc, ca]; // recursive call
    let mr = [];

    // a  b  c
    //Self Work
    for (let j = 0; j < rr.length; j++) {
      let val = rr[j];

      for (let i = 0; i <= val.length; i++) {
        // i = 1 / 2, str = bc
        let res = val.substring(0, i) + ch + val.substring(i); //abc  //bac  //bca
        mr.push(res);
      }
    }
    return mr;
  }

  console.log(getPermutations("abc"));
})();
