function Order(pizza, toppings, crust){
    this.pizza=pizza;
    this.toppings=toppings;
    this.crust=crust;
}
$(document).ready(function(){

    // $("#button1").show()
    // $(".info").hide()
    // $("#thankyou").hide()


    $("#button").click(function(){
         $("#button").hide();
         $(".deliverybutton").show();

    


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
        // alert(totalCost)
       
        $(".pizza1").append(('<tr><td class="size">'+ cost.pizza +'</td><td class="toppings">' + cost.toppings + '</td><td class="crust">'+ cost.crust + '</td><td class="total">'+totalCost))  
        $("#deliverycost").append( + " " + totalCost );
        
       
    })

    $("#button1").click(function(){
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
    
        $(".pizza1").show(function(){
            $(".pizza1").append(('<tr><td class="size">'+ cost.pizza +'</td><td class="toppings">' + cost.toppings + '</td><td class="crust">'+ cost.crust + '</td><td class="total">'+totalCost))
        })
        $("#deliverycost").append( + " " + totalCost );
        
        // $(".complete").show();
        
        
    })
    
    $("#yes").click(function(){
        $("deliverybutton").hide();
        $('#location').show();
    
    })
   




})
  //  $("#no").click(function(){
        //     $(".info").show()
        //     $("#yes").hide()     