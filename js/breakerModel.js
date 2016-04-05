/**
 * Jaiveer Dhanju		100245432
 * Calvin Lui			100225224
 * Derek Yuan			100207884
 * CPSC 1045                    Term Project
 *  
 * The model of Brick Breaker which handles the logic behind the game.
 **/
 

/*********MUSIC*********/
var bgm;
var victory;
var gameOver;

var setVolume = function(vol){
	bgm.volume = vol;
	victory.volume = vol;
	gameOver.volume = vol;
};

var setupMusic = function(){
	bgm = new Audio("./music/Mega Man Battle Network 6 OST - T11 Battle Field (Battle Theme).ogg");
	bgm.loop = true;
	victory = new Audio("./music/Mega Man Battle Network 6 OST - T12 Enemy Deleted!.ogg");
	gameOver = new Audio("./music/Mega Man Battle Network 6 OST - T30 Game Over.ogg");
	setVolume(.05);
   
	bgm.play();
};

var restartMusic = function(){
	bgm.currentTime = 0;
	victory.pause();
	victory.currentTime = 0;
	gameOver.pause();
	gameOver.currentTime = 0;
	
	bgm.play();
};

var playEnding = function(isWin){
	bgm.pause();
	isWin ? victory.play() : gameOver.play();
}

/**********GAME*********/
var SPEED = 20;

var KEY_MAP = {
	//LEFT
	37:  -SPEED,   //Left Arrow key
	65:  -SPEED,   //"A" key
	97:  -SPEED,   //"a" key
	
	//RIGHT
	39:	SPEED,   //Right Arrow key
	68:	SPEED,   //"D" key
	100:	SPEED,   //"d" key
};

var ball = new Ball(320, 300, 10, randomizeVelocity(), randomizeVelocity(), "red");
var blocksArr = [];
var score = 0, lives = 3;



function paddleMoveEvent(event){
	if(KEY_MAP[event.keyCode] != undefined) {
		if(paddle.collide(KEY_MAP[event.keyCode]) == true )
			paddle.move(KEY_MAP[event.keyCode]);
	}
}

function randomizeVelocity() {
    var random = 0;
	
    while(random === 0) {
		random = Math.floor(Math.random()*21) - 10;
	}
	
    return random;
};

function createBlocks() {
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
};

var loser = function(){
	ball.setX(300);
	ball.setY(200);
	lives--;
	updateInfo(score,lives);
};

//To be linked with "New Game" button
var newGame = function(){
	score = 0;
	lives = 3;
	blocksArr = [];
	createBlocks();
	restartMusic();
	updateInfo(score, lives);
};