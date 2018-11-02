function Pizza (size, cheese, toppings) {
  this.size = size,
  this.cheese = cheese,
  this.toppings = toppings,
  this.price = 0
}

function Orders() {
  this.pizzas = [];
  this.pizzaID = 0;
}


Orders.prototype.addOrder = function(pizza) {
  this.pizzas.push(pizza);
  pizza.id = this.assignId();

}

Orders.prototype.assignId = function() {
  return this.pizzaID += 1;
}

var theseOrders = new Orders;

var sizeCost = function(pizza) {
  for (i=0; i<theseOrders.pizzas.length; i++)
  if (theseOrders.pizzas[i].size === "XL") {
    theseOrders.pizzas[i].price += 10
  }
  else if (theseOrders.pizzas[i].size === "L") {
    theseOrders.pizzas[i].price += 7
  }
  else if (theseOrders.pizzas[i].size === "M") {
    theseOrders.pizzas[i].price += 5
  }
}

var cheeseCost = function(pizza) {
  for (i=0; i<theseOrders.pizzas.length; i++)
  if (theseOrders.pizzas[i].cheese === "extra cheese") {
    theseOrders.pizzas[i].price += 2
  }
  else if (theseOrders.pizzas[i].cheese === "normal") {
    theseOrders.pizzas[i].price += 0
  }
}

var toppingsCost = function(pizza) {
  for (i=0; i<theseOrders.pizzas.length; i++)
  if (theseOrders.pizzas[i].toppings.length === 1) {
    theseOrders.pizzas[i].price += 1
  }
  else if (theseOrders.pizzas[i].toppings.length === 2) {
    theseOrders.pizzas[i].price += 2
  }
  else if (theseOrders.pizzas[i].toppings.length === 3) {
    theseOrders.pizzas[i].price += 3
  }
  else if (theseOrders.pizzas[i].toppings.length === 4) {
    theseOrders.pizzas[i].price += 4
  }
  else if (theseOrders.pizzas[i].toppings.length === 5) {
    theseOrders.pizzas[i].price += 5
  }
}

// UI

$(function() {


  $("#submitOrder").submit(function(event) {
    event.preventDefault();

    var whatSize = $("#sizeOption").val();
    var whatCheese = $("input:radio[name=cheese]:checked").val();
    var whatToppings = $("#multipleToppings").val();

    theseOrders.addOrder(new Pizza(whatSize,whatCheese,whatToppings));

    sizeCost(theseOrders);
    cheeseCost(theseOrders);
    toppingsCost(theseOrders);

    console.log(theseOrders);



  });





  });
