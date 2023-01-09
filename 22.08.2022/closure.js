// Closure : closure is a feature in JavaScript where a functon has access to its own scope variables,
//  access to the outer function.

(function () {
  function SuperHero() {
    let firstName = "Peter";
    let lastName = "Parker";
    let superPower = "web shoot";

    function getIdentity() {
      return firstName + " " + lastName;
    }

    return {
      superPower: superPower,
      getIdentity: getIdentity,
    };
  }

  console.log(SuperHero().getIdentity());
})();
