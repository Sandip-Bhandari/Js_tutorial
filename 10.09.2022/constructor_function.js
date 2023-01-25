(function () {
  function fruit(name, price, unit, quantity) {
    // constructor function
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.quantity = quantity;
  }

  fruit.prototype.showDetails = function () {
    console.log(`The price of ${this.name} is ${this.price} ${this.unit} `);
  };

  fruit.prototype.sell = function (quantitySold) {
    this.quantity = this.quantity - quantitySold;
  };

  let apple = new fruit("Fuji", 240, "kg", 100);
  let banana = new fruit("yelaki", 40, "dozen", 100);

  apple.sell(20);
  console.log(apple.quantity);
  console.log(apple instanceof fruit);
  console.log(banana instanceof fruit);
  apple.showDetails();
  banana.showDetails();
})();
