// Remove the duplicate element in the array
// input: const arr = ['a','b','c','a','c','d','a'];
// output: ['a','b','c','d']

(function () {
  function unique(arr) {
    let uniqObj = {};
    for (let i = 0; i < arr.length; i++) {
      uniqObj[arr[i]] = i; // arr[i]  { b: 1, a: 2, c: 3, d:5}
    }

    return Object.keys(uniqObj);
  }

  let duplicate = ["a", "b", "a", "c", "d", "d"];
  console.log(unique(duplicate)); // a,b,c,d
})();
