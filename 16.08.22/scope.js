(function () {
  // Global Scope
  var company = "XYZ corporation";

  // Functional Scope - var
  function getEmployeeDetails() {
    let empName = "Sandip";
    return empName + " works for " + company;
  }

  console.log(getEmployeeDetails());
  console.log("Company name " + company);
  // console.log("emp Name " + empName); // Error. local variable not defined

  // Block Scope - let and const
  // only let follows the block scope . var does'nt follow
  //if,switch,for,while or {} is a block
  function getEmployeeSalary() {
    let salary = 1000000;
    if (salary > 1000000) {
      let tax = 0.1 * salary;
      salary = salary - tax;
    }

    console.log("salary after tax " + salary);
    //console.log("tax applied " + tax); //Error //Block scoped variable
  }

  getEmployeeSalary();
})();
