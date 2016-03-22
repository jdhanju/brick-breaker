/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/
document.onkeypress = paddle;

var speed = 5;

var KEY_MAP = {
	65:  -speed,
	97:  -speed,
	68:   speed,
	100:  speed,
};

function paddle(event){
	if(KEY_MAP[event.charCode] != undefined) {
		if(paddle.collide(KEY_MAP[event.charCode]) == true )
			paddle.move(KEY_MAP[event.charCode]);
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