var $ = function(id) {
	return document.getElementById(id);
};

var altText;
var orderOut= document.getElementById("order");
var orderTotal= document.getElementById("order");
var total = 0;

window.onload = function() {
    
    
    // add image swap and click handler to each image in table
		document.getElementById("images/espresso_info.jpg").onmouseover = function(){
				document.getElementById("images/espresso_info.jpg").src= "images/espresso_info.jpg";
				
		}
		document.getElementById("images/espresso_info.jpg").onmouseout = function(){
				document.getElementById("images/espresso_info.jpg").src= "images/espresso.jpg";
				
		}


		
		
		document.getElementById("images/latte_info.jpg").onmouseover = function(){
				document.getElementById("images/latte_info.jpg").src= "images/latte_info.jpg";
		}
		document.getElementById("images/latte_info.jpg").onmouseout = function(){
				document.getElementById("images/latte_info.jpg").src= "images/latte.jpg";
				
		}



		document.getElementById("images/coffee_info.jpg").onmouseover = function(){
				document.getElementById("images/coffee_info.jpg").src= "images/coffee_info.jpg";
		}
		document.getElementById("images/coffee_info.jpg").onmouseout = function(){
				document.getElementById("images/coffee_info.jpg").src= "images/coffee.jpg";
				
		}




		document.getElementById("images/biscotti_info.jpg").onmouseover = function(){
				document.getElementById("images/biscotti_info.jpg").src= "images/biscotti_info.jpg";
		}
		document.getElementById("images/biscotti_info.jpg").onmouseout = function(){
				document.getElementById("images/biscotti_info.jpg").src= "images/biscotti.jpg";
				
		}




		document.getElementById("images/cappuccino_info.jpg").onmouseover = function(){
				document.getElementById("images/cappuccino_info.jpg").src= "images/cappuccino_info.jpg";
		}
		document.getElementById("images/cappuccino_info.jpg").onmouseout = function(){
				document.getElementById("images/cappuccino_info.jpg").src= "images/cappuccino.jpg";
				
		}




		document.getElementById("images/scone_info.jpg").onmouseover = function(){
				document.getElementById("images/scone_info.jpg").src= "images/scone_info.jpg";
		}
		document.getElementById("images/scone_info.jpg").onmouseout = function(){
				document.getElementById("images/scone_info.jpg").src= "images/scone.jpg";
				
		}





	// for click event add item to order and update total
		document.getElementById("images/espresso_info.jpg").onclick = function(){
				var value = 1.95;
				total+= value;
				document.getElementById("total").textContent= "$"+total;
				var text= document.createTextNode("\n$"+value+" - Espresso");
				document.getElementById("order").appendChild(text);
		}
		document.getElementById("images/scone_info.jpg").onclick = function(){
				var value = 1.75;
				total+= value;
				document.getElementById("total").textContent= "$"+total;
				var text= document.createTextNode("\n$"+value+" - Scone");
				document.getElementById("order").appendChild(text);
		}
		document.getElementById("images/coffee_info.jpg").onclick = function(){
				var value = 2.95;
				total+= value;
				document.getElementById("total").textContent= "$"+total;
				var text= document.createTextNode("\n$"+value+" - Scone");
				document.getElementById("order").appendChild(text);
		}
		document.getElementById("images/latte_info.jpg").onclick = function(){
				var value = 2.95;
				total+= value;
				document.getElementById("total").textContent= "$"+total;
				var text= document.createTextNode("\n$"+value+" - Scone");
				document.getElementById("order").appendChild(text);
		}
		document.getElementById("images/biscotti_info.jpg").onclick = function(){
				var value = 1.95;
				total+= value;
				document.getElementById("total").textContent= "$"+total;
				var text= document.createTextNode("\n$"+value+" - Scone");
				document.getElementById("order").appendChild(text);
		}
		

	// display order and total
	/*
		document.getElementById("images/espresso_info.jpg").onclick = function(){
				var text= document.createTextNode("$"+value+" - Espresso");
				document.getElementById("order").appendChild(text);
			
		}
		*/
    
	// Bonus
        // add click event handler for check out button
    
		// add click event handler for clear button
    
}; // end onload