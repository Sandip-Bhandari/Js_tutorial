//Write a program to create a mathematical calculation table of given number (n).

(function () {
  function mathTable(table, n) {
    for (let i = 1; i <= n; i++) {
      console.log(`${table} * ${i} is ${table * i}`);
    }
  }
  console.log(mathTable(5, 10));
})();
