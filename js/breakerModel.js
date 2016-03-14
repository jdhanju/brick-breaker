

document.onkeypress = paddle;

function paddle(event){
	if(event.charCode ==100){
		paddle.move(2)
	}
}

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





