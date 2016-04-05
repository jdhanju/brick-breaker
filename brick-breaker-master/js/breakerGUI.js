/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * The view of Brick Breaker that updates the page of the current state of the game
 **/

//Clear canvas for drawing
var clearCanvas = function(ctx) {
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
};
 
 //Should be called on a timer after game starts.
 //Draws state of the game.
var draw = function(ctx){
	clearCanvas(ctx);
	ball.draw(ctx);
	paddle.draw(ctx);
	
	for(var i = 0;i < blocksArr.length;i++){
		blocksArr[i].draw(ctx);
	}
	
	removeBlocks(ball.move(blocksArr, paddle, ctx));
};

var endGame = function(message) {
	clearCanvas(ctx);
	ctx.font = "30px Arial";
	ctx.fillText("You " + message,10,50);
};

var updateInfo = function(currentScore, currentLives) {
	document.getElementById("score").innerHTML = "Score: " + currentScore + "<br/>";
	document.getElementById("lives").innerHTML = "Lives: " + currentLives + "<br/>";
};

//Calls other functions to update UI
var updateUI = function(ctx){
	if(checkGameEnd()) {
		playEnding(true);
		endGame("win");
	}else if(lives===0){
		playEnding(false);
		endGame("lose");
	}
	else {
		draw(ctx);
	}
};