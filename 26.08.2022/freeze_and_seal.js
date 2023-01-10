(function () {
  "use strict";

  //TODO:  Object.freeze()

  let learner = {};
  learner.name = "Jayesh";
  learner.lastName = "Chauhan";

  Object.freeze(learner);
  //  learner.middleName = "XYX";  //Error
  //  delete learner.lastName;  // Error

  //TODO:  Object.seal()

  let student = {};
  student.name = "Salman";
  student.lastName = "Shaikh";

  Object.seal(student);
  student.name = "Shahrukh";
  console.log(student.name);

  delete student.name;
})();
