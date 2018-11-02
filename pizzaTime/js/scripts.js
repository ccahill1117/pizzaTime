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
  for (var i=0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].pizzaId === id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

Orders.prototype.deletePizza = function(id) {
  for (var i=0; i < this.pizzas.length; i++) {
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
  var pizzaList = $("ul#pizzaSpace");
  var htmlForPizzaInfo = "";
  pizza.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.pizzaId + ">" + "🍕" + "Item No: " + pizza.pizzaId + " Size: " + pizza.size + " Cheese Amount: " + pizza.cheese + " Selected Toppings: " + pizza.toppings + " Item Price $" + pizza.price + "</li>";
  });
  pizzaList.html(htmlForPizzaInfo);
};

function displayOrderAmount(pizza) {
  var orderAmount = 0;
  for (i=0; i<theseOrders.pizzas.length;i++)
  orderAmount += theseOrders.pizzas[i].price;
  return orderAmount;
  }


function displayPizzasTotal(pizzaId) {
  var pizza = theseOrders.findPizza(pizzaId);
  $("#show-pizza").show();
  $("#sizePiz").text(pizza.size);
};


function attachContactListeners() {
  $("ul#pizzaSpace").on("click", "li", function() {
    theseOrders.deletePizza(this.id);
  });
};

$(document).ready(function() {
  attachContactListeners();
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
    $("#orderTotal").text(displayOrderAmount(theseOrders));


    console.log(theseOrders);
  });

});

//Question for code review -- how would I make a prototype to sum the pie prices when they are made? could not figure that out.
