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
	} else {
		// erase this?
		console.log("wrong key");
	}
}