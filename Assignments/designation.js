// Create a program where you will be given a list of names of the people along with their designation,
// based on the name you type in from the input field of the given html file, the relevant designation of
// the person will be displayed.
// Following are the designation of the people:
// Alex is a Developer
// John is an Artist
// Strek is a Singer
// Smith is an Actor

(function () {
  var data = {
    Alex: "Developer",
    John: "Artist",
    Strek: "Singer",
    Smith: "Actor",
  };
  function designation() {
    let empName = document.getElementById("name").value;
    if (data[empName] != undefined) {
      document.getElementById("designation").innerHTML =
        empName + " is" + data[empName];
    }
  }

  console.log(designation());
})();
