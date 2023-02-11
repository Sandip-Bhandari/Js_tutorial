(function () {
  // 1.Number
  // Explicit data type
  var empid = new Number(12345);
  console.log(empid);

  // Impllicit data typing
  var empAge = 33; // You define empAge as a number variable

  console.log(typeof empid);
  console.log(typeof empAge);

  //Js is loosely typed language
  empAge = "45"; // You define empAge as a string variable
  console.log(typeof empAge);

  //2. String
  let empName = "Sandip";
  console.log(typeof empName);

  let empAddress = String("Asansol");
  console.log(typeof empAddress); // String

  //3. Boolean
  let isEmpMarried = true;
  console.log(typeof isEmpMarried);

  let isEmpIndian = Boolean(false);
  console.log(typeof isEmpIndian); // Boolean

  //4. undefined
  var empStatus;
  console.log(typeof empStatus); // undefined

  //5.null (It releases memory)
  var empPassportApplicationStatus = null;
  console.log(typeof empPassportApplicationStatus); // Object

  //6. function
  var calculateEmpSalary = function () {
    //some logic
  };

  console.log(typeof calculateEmpSalary); // function

  //7. Object
  var Employee = {}; //empty object
  console.log(typeof Employee);
})();
