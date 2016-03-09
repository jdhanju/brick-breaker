var theCanvas = document.querySelector("#theCanvas");
var ctx = theCanvas.getContext("2d");

var ready = function() {
	var ball = new Ball(500, 530, 10, 3, 4, "red");
	var block = new Block(50, 50, 70, 20, "skyblue");
	var blocksArr = createBlocks();
	
	ball.draw(ctx);
	for (var i = 0; i < blocksArr.length; i++) {
		blocksArr[i].draw(ctx);
	}
	paddle.draw(ctx);
};

var createBlocks = function() {
	var x = 50;
	var blocksArr = [];
	
	while (x+70 < theCanvas.width) {
		blocksArr.push(new Block(x, 50, 70, 20, "skyblue"));
		
		x += 75;
	}
	
	return blocksArr;
}

ready();