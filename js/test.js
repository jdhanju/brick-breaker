/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

var theCanvas = document.querySelector("#theCanvas");
var ctx = theCanvas.getContext("2d");

var ball = new Ball(480, 200, 10, 3, 5, "red");

var ready = function() {
	clearCanvas(ctx);
	
	var blocksArr = createBlocks();	
	for (var i = 0; i < blocksArr.length; i++)
		blocksArr[i].draw(ctx);

	ball.draw(ctx);
	paddle.draw(ctx);
	
	ball.move(blocksArr, paddle, ctx);
	requestAnimationFrame(ready);
};

var createBlocks = function() {
	var x = 500;
	var blocksArr = [];
	
	while (x+70 < theCanvas.width) {
		blocksArr.push(new Block(x, 300, 70, 20, "skyblue"));
		x += 71;
	}
	
	return blocksArr;
}

ready();
