/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/
 
// document.onkeypress = paddle;
document.onkeydown = paddle;

var SPEED = 10;

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

function paddle(event){
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
}

var createBlocks = function() {
	var x = 40;
	
	while (x+70 < theCanvas.width) {
		blocksArr.push(new Block(x, 50, 70, 20, "skyblue"));
		x += 70;
	}
}
