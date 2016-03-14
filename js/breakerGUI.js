/**
 * Javeer Dhanju        
 * Calvin Lui           
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
**/

function draw(){
  //Clear canvas for drawing
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  //Draws current state of the game
  paddle.draw(ctx);
  ball.draw(ctx);
  for(var ind=0;ind<blocks.length;ind++)
    block[ind].draw(ctx);
}
