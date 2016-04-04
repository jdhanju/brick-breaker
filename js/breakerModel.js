/**
 * Jaiveer Dhanju     100245432
 * Calvin Lui              100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/
 
 //document.onkeypress = paddleMoveEvent;
document.onkeydown = paddleMoveEvent;

var SPEED = 20;

var KEY_MAP = {
	//LEFT
	37:  -SPEED,
	65:  -SPEED,
	97:  -SPEED,
	
	//RIGHT
	39:	SPEED,
	68:	SPEED,
	100:	SPEED,
};

var ball = new Ball(320, 300, 10, randomizeVelocity(), randomizeVelocity(), "red");
var blocksArr = [];
var score = 0, lives = 3;

function paddleMoveEvent(event){
	if(KEY_MAP[event.keyCode] != undefined) {
		if(paddle.collide(KEY_MAP[event.keyCode]) == true )
			paddle.move(KEY_MAP[event.keyCode]);
	}
	// console.log(event.keyCode);
}

function randomizeVelocity() {
    var random = 0;
	
    while(random === 0) {
		random = Math.floor(Math.random()*21) - 10;
	}
	
    return random;
}

var createBlocks = function() {
	var x = 40;
	
	while (x+70 < theCanvas.width) {
		blocksArr.push(new Block(x, 50, 70, 20, "skyblue"));
		x += 70;
	}
}

var removeBlocks = function(index) {
	if (index >= 0) {
		blocksArr.splice(index, 1);
		score += 100;
		updateInfo(score, lives);
	}
}

var checkGameEnd = function() {
	if (blocksArr.length == 0) {
		return true;
	}
	return false;
}

var loser = function(){
	//console.log("lsdajf");
	ball.setX(300);
	ball.setY(200);
	//ball.VelX= randomizeVelocity();
	//ball.VelY= randomizeVelocity();
	lives--;
	updateInfo(score,lives);
}

//To be linked with "New Game" button
var newGame = function(){
	score = 0;
	lives = 3;
	blocksArr = [];
	createBlocks();
	updateInfo(score, lives);
};