(function () {
  "use strict";

  //TODO:  Object.freeze()
  //? The object.freeze() method freezes an object for preventing the changes.

  let learner = {};
  learner.name = "Jayesh";
  learner.lastName = "Chauhan";

  Object.freeze(learner);

  //  learner.middleName = "XYX";  //Error
  //  delete learner.lastName;  // Error

  //TODO:  Object.seal()
  //? The object.seal() method seals an object

  let student = {};
  student.name = "Salman";
  student.lastName = "Shaikh";

  Object.seal(student);
  student.name = "Shahrukh";
  console.log(student.name);

  delete student.name;
})();
