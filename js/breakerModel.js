/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/
document.onkeypress = paddle;

var KEYMAP = {
	
}

function paddle(event){
	if(event.charCode ==100){
		paddle.move(2)
	} else if (event.charCode == 97) {
		paddle.move(-2);
	}
}

/*
function draw(ctx){
	ctx.clearRect(0,0,canvas.width,canvas.height); //wipes screen
	
	//Redraw game
	ball.move();
	ball.draw(ctx);
	paddle.draw(ctx);
	for(ind=0;ind<blocks.length;ind++){
		blocks.draw(ctx);
	}
}
*/





