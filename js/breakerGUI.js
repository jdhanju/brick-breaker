/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

// var ball = new Ball(320, 300, 10, randomizeVelocity(), randomizeVelocity(), "red");
// var blocksArr = [];
// var score = 0, lives = 0;

// To be linked with "New Game" button
// var newGame = function(){
	// score = 0;
	// lives = 3;
	// updateInfo();
// };

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

// var removeBlocks = function(index) {
	// if (index >= 0) {
		// blocksArr.splice(index, 1);
		// score += 100;
		// updateInfo();
	// }
// }

// var checkGameEnd = function() {
	// if (blocksArr.length == 0) {
		// return true;
	// }
	// return false;
// }

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
		endGame("win");
	}else if(lives===0){
		endGame("lose");
	}
	else {
		draw(ctx);
	}
};