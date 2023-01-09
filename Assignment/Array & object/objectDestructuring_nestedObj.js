//Program to demonstrate Object destructuring in nested objects

(function () {
  const movie = {
    name: "Spiderman",
    genre: "action",
    theatres: {
      imax: "chennai",
      pvr: "mumbai",
    },
    collection: "100cr",
    hit: function () {
      return `${name}, is hit`;
    },
    flop: function () {
      return `${name}, is flop`;
    },
  };
  const { name, hit, theatres } = movie;
  console.log(hit());
  const { imax, pvr } = theatres;
  console.log("theatres locations are", imax, "and", pvr);
})();
