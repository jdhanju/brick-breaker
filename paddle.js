var paddle ={
	x_cord: 300,
	
	y_cord: 500,
	
	Length: 90,
	
	Width:20,
	
	getpaddleWidth: function(){
					return this.Width;
				},
				
	getpaddleLength: function(){
					return this.Length;
				},
	
	changepaddleX: function(newX){
				this.x = newX;
				},
	
	getpaddleY: function(){
					return this.y_cord;
				},
	
	getpaddleX: function (){
					return this.x_cord;
				},
	
	drawPaddle: function(canvas){ // needs canvas as parameter 
					canvas.beginPath();
					canvas.fillRect(this.getpaddleX()-(this.getpaddleLength()/2),this.getpaddleY()- (this.getpaddleWidth()/2),this.getpaddleLength(),this.getpaddleWidth());
					canvas.strokeStlye = "blue";
					canvas.stroke();
				},
				
	movePaddle: function(move){
					this.x_cord+=move;
				},
				
	text: "derek fails",
};
