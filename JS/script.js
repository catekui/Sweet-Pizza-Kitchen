function Order(pizza, toppings, crust){
    this.pizza=pizza;
    this.toppings=toppings;
    this.crust=crust;
}
$(document).ready(function(){

    $("#button").click(function(){
         $("#button").show();
         $(".deliverybutton").show();
         $("#totalpizzacost").show();

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
        // order = order + 1;
        var totalCost = cost.pizza + cost.toppings + cost.crust 
        // alert(totalCost)
        // var order = totalCost + order
        
        $(".pizza1").append(('<tr><td class="size">'+ cost.pizza +'</td><td class="toppings">' + cost.toppings + '</td><td class="crust">'+ cost.crust + '</td><td class="total">'+totalCost))  
        $("#totalpizzacost").append( + " " + totalCost );
        
    })
    // yes button
    $("#yes").click(function(){
        $(".deliverybutton").hide();
        $('#location').show();
        // $("totalpizzacost").hide()
    })
    // no button
    $("#no").click(function(){
        $("#location").hide();
        $(".deliverybuton").hide()
        $("#totalpizzacost").show()
        $(".completebutton").show()
        $("#yes").add("#no").hide()
    })
    // checkout button
    $("#checkout").click(function(){
        $("#thankyou").show()
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
        
        var totalCost = cost.pizza + cost.toppings + cost.crust;
        var totalShippingCost = totalCost + 300;
        // $("#totalshipping").append(totalShippingCost);

        let name = $("input#name").val();
        let phonenumber = $("input#phoenumber").val();
        let locality = $("input#locality").val();

        if ($("input#name").val() && $("input#phonenumber").val() && $("input#locality").val()!=""){
  
        alert("Thank you for choosing our pizza. The order is being dispatched shortly. It costs ksh " + totalShippingCost)
          }
          else {
            alert("Please fill in the details for delivery!");
            
          }   
    })
})
       