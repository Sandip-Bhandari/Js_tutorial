//Write code for finding the smallest element in an array.

(function () {
  let arr = [5, 4, 3, 6, 4, 2];
  let smallestElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElem) {
      smallestElem = arr[i];
    }
  }
  console.log("Smallest element in array is ", smallestElem);
})();
