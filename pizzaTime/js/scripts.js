//Back end

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
  pizza.pizzaId = this.assignId();

}

Orders.prototype.assignId = function() {
  return this.pizzaID += 1;
}

Orders.prototype.findPizza = function(id) {
  for (var i=o; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].pizzaId === id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

Orders.prototype.deletePizza = function(id) {
  for (var i=o; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].pizzaId === id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}

//Functions etc
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

function displayPizzas(pizza) {
  var pizzaList = $("div#pizzaSpace");
  var htmlForPizzaInfo = "";
  pizza.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<div id=" + pizza.pizzaId + ">" + pizza.pizzaId + " " + pizza.size + " " + pizza.cheese + " " + pizza.toppings + "</div>";
  });
  pizzaList.html(htmlForPizzaInfo);
};

function displayPizzasTotal(pizza) {
  var pizzaList = $("div#pizzaSpace");
  var htmlForPizzaInfo = "";
  pizza.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<div id=" + pizza.pizzaId + ">" + pizza.pizzaId + " " + pizza.size + " " + pizza.cheese + " " + pizza.toppings + "</div>";
  });
  pizzaList.html(htmlForPizzaInfo);
};


$(function() {
  $("#submitOrder").submit(function(event) {
    event.preventDefault();

    var whatSize = $("input:radio[name=size]:checked").val();
    var whatCheese = $("input:radio[name=cheese]:checked").val();
    var whatToppings = $("#multipleToppings").val();
    $("#sizeOption").val("");
    $("#multipleToppings").val("");

    theseOrders.addOrder(new Pizza(whatSize,whatCheese,whatToppings));

    displayPizzas(theseOrders);

    console.log(theseOrders);
  });

  $("#totalOrder").click(function(event) {

    sizeCost(theseOrders);
    cheeseCost(theseOrders);
    toppingsCost(theseOrders);
    displayPizzasTotal(theseOrders);


  });


});

//Question for code review -- how would I make a prototype to sum the pie prices when they are made? could not figure that out.
