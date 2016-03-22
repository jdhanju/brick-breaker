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

createBlocks();
ready();