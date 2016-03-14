

document.onkeypress = paddle;

function paddle(event){
	if(event.charCode ==100){
		if(paddle.collide() == true){
		paddle.move(2)
		}
	}
}






