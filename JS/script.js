$(document).ready(function(){

    function Order(pizza, toppings, crust){
        this.pizza=pizza;
        this.toppings=toppings;
        this.crust=crust;
    }
    $("button").click(function(){
        function myPizza(){
            const pizza = document.getElementById("pizza").ariaValueMax;
            parseInt(pizza);
        }
        function myToppings(){
            const toppings = document.getElementById("toppings").ariaValueMax;
            parseInt(toppings);
        }
        function myCrust(){
            const crust = document.getElementById("crust").ariaValueMax;
            parseInt(crust);
        }
        if (pizza === "" ||toppings=== "" || crust === ""){
            alert("Please choose something")
        }
    })
})