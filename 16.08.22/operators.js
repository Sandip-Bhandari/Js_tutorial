(function () {
  // ====== ASSINMENT OPERATOR(=, +=, -=, *=, /*) =======
  let empName = "Vijay";
  let age = 33;
  let salary = 100000;
  let currentMonthSalary = 100000;
  // salary = salary + currentMonthSalary;
  salary += currentMonthSalary; //shorthand version in case you need previous value also
  console.log(salary);

  // ======= COMPARISON OPERATOR ========
  // >, >=, <, <=, ==, !=

  console.log(age >= 33); //true
  console.log(age != 33); //true
  console.log(age == 33); //true

  // Strict type check for eqyality ( ===, !==)
  console.log(age === "33"); // false. value check plush type and type is string but age is number.

  // ======= LOGICAL OPERATORS =======

  // &&(AND), ||(OR), !(NOR) operators
  // && - both conditions should be true
  // true && true = true
  // true && false = false
  // false && true = false
  // false && false = false

  console.log("=========== AND check =========");
  console.log("AND check" + (empName == "Vijay" && age == 33)); //true
  console.log("AND check" + (empName == "Ajay" && age == 33)); //false

  // || - atleast one condition should be true
  // true || true = true
  // true || false = true
  // false || true = true
  // false || false = false

  console.log("=========== OR check =========");
  console.log("AND check" + (empName == "Vijay" || age == 33)); //true
  console.log("AND check" + (empName == "Ajay" || age == 33)); //true

  // ====== (!) NOR OPERATOR =======
  console.log("=========== NOR Check ============");
  console.log(!(empName == "Vijay")); // false

  // ==== INCREMENT AND DECREMENT OPERATOR ====
  let counter = 0;
  // ++var means first print and then increment
  console.log("counter" + counter++);
  console.log(counter);

  // another version , var++ means increment  first than print
  console.log(++counter);

  // ===== TERNARY OPERATOR(? :) =====
  let isemployeeOverThirty = age > 30 ? "OverThirty" : "UnderThirty";
  console.log(isemployeeOverThirty);

  // =====ASSIGNMENT OPERATOR =====
})();
