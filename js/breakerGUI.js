/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

function clearCanvas(ctx) {
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
 
function draw(ctx){
	clearCanvas(ctx);
	
	/***** Redraw game *****/
	ball.move();
	ball.draw(ctx);
	paddle.draw(ctx);
	for(var i = 0;i < blocks.length;i++){
		blocks.draw(ctx);
	}
}