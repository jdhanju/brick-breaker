/**
 * Javeer Dhanju        
 * Calvin Lui           
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
**/

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
