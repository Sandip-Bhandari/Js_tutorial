// Given an array your task is to find if there is a triplet present with the given sum.

(function () {
  function printTriplets(arr, expectedSum) {
    arr.sort((a, b) => a - b); // nlogn
    let left = 0,
      right = arr.length - 1,
      next = left + 1;
    while (left < right) {
      //n
      let sum = arr[left] + arr[next] + arr[right];
      if (sum == expectedSum) {
        console.log(
          `${arr[left]} + ${arr[next]} + ${arr[right]} = ${expectedSum}`
        );
        return true;
      } else if (sum < expectedSum) {
        left++;
        next++;
      } else {
        right--;
      }
    }
  }

  let arr = [1, 2, 4, 3, 8, 5, 6];
  let expectedSum = 8;
  printTriplets(arr, expectedSum);
})();
