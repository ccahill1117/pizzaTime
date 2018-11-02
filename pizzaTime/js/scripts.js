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

var sizeCost = function(pizza,x) {
  if (theseOrders.pizzas[x].size === "XL") {
    theseOrders.pizzas[x].price += 10
  }
  else if (theseOrders.pizzas[x].size === "L") {
    theseOrders.pizzas[x].price += 7
  }
  else if (theseOrders.pizzas[x].size === "M") {
    theseOrders.pizzas[x].price += 5
  }
}

var cheeseCost = function(pizza,x) {
  if (theseOrders.pizzas[x].cheese === "extra cheese") {
    theseOrders.pizzas[x].price += 2
  }
  else if (theseOrders.pizzas[x].cheese === "normal") {
    theseOrders.pizzas[x].price += 0
  }
}

var toppingsCost = function(pizza,x) {
  if (theseOrders.pizzas[x].toppings.length === 1) {
    theseOrders.pizzas[x].price += 1
  }
  else if (theseOrders.pizzas[x].toppings.length === 2) {
    theseOrders.pizzas[x].price += 2
  }
  else if (theseOrders.pizzas[x].toppings.length === 3) {
    theseOrders.pizzas[x].price += 3
  }
  else if (theseOrders.pizzas[x].toppings.length === 4) {
    theseOrders.pizzas[x].price += 4
  }
  else if (theseOrders.pizzas[x].toppings.length === 5) {
    theseOrders.pizzas[x].price += 5
  }
}

function displayPizzas(pizza) {
  var pizzaList = $("div#pizzaSpace");
  var htmlForPizzaInfo = "";
  pizza.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<div id=" + pizza.pizzaId + ">" + pizza.pizzaId + " " + pizza.size + " " + pizza.cheese + " " + pizza.toppings + " $" + pizza.price + "</div>";
  });
  pizzaList.html(htmlForPizzaInfo);
};

function displayPizzasTotal(pizzaId) {
  var pizza = theseOrders.findPizza(pizzaId);
  $("#show-pizza").show();
  $(".sizePiz").html(pizza.size);

};

function attachContactListeners() {
  $("div#pizzaSpace").on("click", "div", function() {
    displayPizzasTotal(this.pizzaID);
  });
}

$(function() {
  $("#submitOrder").submit(function(event) {
    event.preventDefault();

    var whatSize = $("input:radio[name=size]:checked").val();
    var whatCheese = $("input:radio[name=cheese]:checked").val();
    var whatToppings = $("#multipleToppings").val();
    $("#sizeOption").val("");
    $("#multipleToppings").val("");

    theseOrders.addOrder(new Pizza(whatSize,whatCheese,whatToppings));

    sizeCost(theseOrders,(theseOrders.pizzas.length-1));
    cheeseCost(theseOrders,(theseOrders.pizzas.length-1));
    toppingsCost(theseOrders,(theseOrders.pizzas.length-1));

    displayPizzas(theseOrders);

    console.log(theseOrders);
  });

});

//Question for code review -- how would I make a prototype to sum the pie prices when they are made? could not figure that out.
