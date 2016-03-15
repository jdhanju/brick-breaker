/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

//To be linked with "New Game" button
function newGame(){
	document.getElementById("score").innerHTML = 0;
	document.getElementById("lives").innerHTML = 3;
}

//Updates user score
function updateScore(newScore){
	document.getElementById("score").innerHTML = newScore;
}

//Clear canvas for drawing
function clearCanvas(ctx) {
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
 
 //Should be called on a timer after game starts.
 //Draws state of the game.
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

//Calls other functions to update UI
function updateUI(ctx, newScore){
	draw(ctx);
	updateScore(newScore);
}
