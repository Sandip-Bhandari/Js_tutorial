(function () {
  function getMinLecture(M, N) {
    if ((N / M) * 100 >= 75) {
      return 0;
    } else {
      return (75 / 100) * M - N;
    }
  }
  console.log("getMinLecture(10,8) " + getMinLecture(10, 8));
  console.log("getMinLecture(10,2) " + getMinLecture(10, 2));
  console.log("getMinLecture(10,6) " + getMinLecture(10, 6));
})();
