//? The filter() function is used while creating a search bar with a given list of items.
//?The filter() method also creates a new array by exevery element of the array, and keeps
//? it in the resulting array IF and ONLY IF the element passes the Boolean test returned by
//? thThe callback passed into the filter() method accepts any of the three arguments: item,
//?  index and array; same as the map() method.

(function () {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let evenNumbers = numbers.filter((number) => number % 2 == 0);

  console.log(evenNumbers);

  let stateWithCapitalCity = [
    {
      state: "Maharashtra",
      capital: "Mumbai",
      noOfDistrict: 38,
    },
    {
      state: "Rajasthan",
      capital: "Jaipur",
      noOfDistrict: 35,
    },
    {
      state: "Andhra",
      capital: "Amravati",
      noOfDistrict: 36,
    },
    {
      state: "Goa",
      capital: "Panaji",
      noOfDistrict: 2,
    },
  ];

  let stateWithMoreThan35Districts = stateWithCapitalCity.filter(
    (item) => item.noOfDistrict > 35
  );

  console.log(stateWithMoreThan35Districts);
})();
