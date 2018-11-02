function Pizza (size, cheese, sauce, toppings) {
  this.size = size,
  this.cheese = cheese,
  this.sauce = sauce,
  this.toppings = toppings
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





// UI

$(function() {


  $("#submitOrder").click(function(event) {

    var whatSize = $("#sizeOption").val();
    var whatCheese = $("#cheeseOption").val();
    var whatSauce = $("#sauceOption").val();
    var whatToppings = $("#toppingsOption").val();

    theseOrders.addOrder(new Pizza(whatSize,whatCheese,whatSauce,whatToppings))


    console.log(theseOrders);

  });


});
