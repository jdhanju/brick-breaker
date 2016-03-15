var speed = 5;

document.onkeypress = paddle;

var map = {
	65:  -speed,
	97:  -speed,
	68:   speed,
	100:  speed,
};

function paddle(event){
	if(map[event.charCode]!=undefined){
		
		if(paddle.collide(map[event.charCode]) == true ){
			
			paddle.move(map[event.charCode]);
		}
	}else{
		console.log("wrong key");
	}
}
//if i press an unmapped key block goes away








