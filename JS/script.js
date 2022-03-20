$(document).ready(function(){
    // constructor
    function Order(pizza, toppings, crust){
        this.pizza=pizza;
        this.toppings=toppings;
        this.crust=crust;
    }

    $("button").click(function(){
        function myPizza(){
            const pizzaCost = document.getElementById("pizza").value;
            return parseInt(pizzaCost);
        }
        function myToppings(){
            const toppingsCost = document.getElementById("toppings").value;
            return parseInt(toppingsCost);
        }
        function myCrust(){
            const crustCost = document.getElementById("crust").value;
            return parseInt(crustCost);
        }
        let cost =  new Order(myPizza(), myToppings(), myCrust())
        
        var totalCost = cost.pizza + cost.toppings + cost.crust
        alert(totalCost)


        
    })
})