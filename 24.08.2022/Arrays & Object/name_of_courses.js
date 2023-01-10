(function () {
  const array_name_courses = {
    java: 15,
    javascript: 78,
    nodejs: 38,
    php: 96,
  };

  // to implement conversion object to key's array
  const keys = Object.keys(array_name_courses);

  // to print all keys
  console.log(keys);

  // ['java', 'javascript', 'nodejs', 'php']
  // iterate over object
  keys.forEach((key, index) => {
    console.log(`${key}: ${array_name_courses[key]}`);
  });
})();
