//! Requirements:
//"Bikers A and B started the journey and A having X litres
// of petrol and B having Y litres of petrol. K
// and L are the km per litre for A and B bikes.

// Let us consider halt as an array a1, a2, a3, .... an where n is the length of the array. a represent distance
// from one halt to another.

//? Write a program to find each biker will cross how many halts based on the petrol quantity and the litre per km

(function () {
  function calculateHalts(halts, totalDistance) {
    let haltsCovered = 0;
    for (let i = 0; i < halts.length; i++) {
      if (halts[i] < totalDistance) {
        totalDistance = totalDistance - halts[i];
        haltsCovered += 1;
      } else {
        break;
      }
    }

    return haltsCovered;
  }

  let X = 4; // petrol available
  let K = 30; //30km per litre
  let totalDistanceByA = X * K;
  let Y = 4; // petrol available
  let L = 30; //30km per litre
  let totalDistanceByB = Y * L;

  let halts = [25, 65, 35, 40, 90];

  console.log(calculateHalts(halts, totalDistanceByA));
  console.log(calculateHalts(halts, totalDistanceByB));
})();
