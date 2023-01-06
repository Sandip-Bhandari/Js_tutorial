(function CheckGrade() {
  var marks = document.getElementById("Enter  your marks").value;
  var CheckGrade = document.getElementById().value;
  if (score >= 90) {
    grade = "A";
  } else {
    if (score >= 80 && score <= 89) {
      grade = "B";
    } else {
      if (score >= 33 && score <= 59) {
        grade = "D";
      } else {
        grade = "F";
      }
    }
  }
  console.log(grade);
})();
