(function () {
  let empName = "Sandip",
    empAge = 33,
    annualSalary = 15000000;

  // salary is lessthan 5 lakh no tax
  // simple if else
  if (annualSalary <= 500000) {
    console.log("No tax");
  } else {
    console.log("you will be taxed");
  }

  // else if
  if (annualSalary >= 1000000) {
    console.log("30% tax");
  } else if (annualSalary >= 5000000) {
    console.log("20% tax");
  } else {
    console.log("No tax");
  }

  //Switch statement
  switch (true) {
    case annualSalary >= 1000000:
      console.log("20% tax");
      break;
    case annualSalary >= 500000:
      console.log("20% tax");
    default:
      console.log("no tax");
      break;
  }

  // another switch, looking for Sandip
  empName = "Sanjay";
  switch (empName) {
    case "Sandip":
      console.log("Sandip found");
      break;
    default:
      console.log("Employee name is " + empName);
      break;
  }
})();
