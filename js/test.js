/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

var theCanvas = document.querySelector("#theCanvas");
var ctx = theCanvas.getContext("2d");

var ready = function() {
	updateUI(ctx);
	requestAnimationFrame(ready);
};

var setup = function(){
	document.getElementById("newGame").onclick = newGame;
	document.getElementById("instructions").onclick = function() {
		var myUL = document.getElementById("myUL");
		if (myUL.style.display === "block" || myUL.style.display === "") {
			myUL.style.display = "none";
			console.log("hidden");
		} else {
			myUL.style.display = "block";
			console.log("visible");
		}
	};
}


window.onload = setup;
createBlocks();
ready();