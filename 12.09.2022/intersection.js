// Find the intersection of two sorted arrays. OR in other
// words, Given 2 sorted arrays, find all the elements which occur in both the arrays.

(function () {
  function getIntersection(first, second) {
    let firstPointer = 0,
      secondPointer = 0,
      firstArrLength = first.length,
      secondArrLength = second.length;

    while (firstPointer < firstArrLength && secondPointer < secondArrLength) {
      if (first[firstPointer] < second[secondPointer]) {
        firstPointer++;
      } else if (first[firstPointer] > second[secondPointer]) {
        secondPointer++;
      } else {
        console.log(first[firstPointer]);
        firstPointer++;
        secondPointer++;
      }
    }
  }

  let first = [12, 15, 24, 33, 35];
  let second = [1, 5, 15, 18, 35, 67, 90];
  getIntersection(first, second);
})();
