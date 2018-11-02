function Pizza (size, cheese, sauce, toppings) {
  this.size = size,
  this.cheese = cheese,
  this.sauce = sauce,
  this.toppings = toppings,
  this.price = 0
}

function Orders() {
  this.pizzas = [];
  this.currentId = 0;
}


Orders.prototype.addOrder = function(pizza) {
  this.pizzas.push(pizza);
  pizza.id = this.assignId();

}

Orders.prototype.assignId = function() {
  return this.currentId += 1;
}


var theseOrders = new Orders;

var pizzaCost = function(pizza) {
  for (i=0; i<theseOrders.pizzas.length; i++)
  if (theseOrders.pizzas[i].size === "XL") {
    theseOrders.pizzas[i].price = 5
  }
  else if (theseOrders.pizzas[i].size === "L") {
    theseOrders.pizzas[i].price = 3
  }
}

// UI

$(function() {


  $("#submitOrder").click(function(event) {

    var whatSize = $("#sizeOption").val();
    var whatCheese = $("#cheeseOption").val();
    var whatSauce = $("#sauceOption").val();
    var whatToppings = $("#multipleToppings").val();
    console.log(whatToppings);

    theseOrders.addOrder(new Pizza(whatSize,whatCheese,whatSauce,whatToppings));


  });



    console.log(theseOrders);


  });
