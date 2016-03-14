var paddle = {
	/***** Create Data Values *****/
	x: 		500,
	y: 		300,
	width: 		90,
	height:		20,
	color:		"blue",
	
	/********** Accessors **********/
	getX: 		function() {return this.x;},
	getY: 		function() {return this.y;},
	getHeight: 	function() {return this.height;},	
	getWidth: 	function() {return this.width;},
	
	/********** Mutators **********/
	setX: 		function(x) {this.x = x;},
	move: 		function(change) {this.x+=change;},
	
	/********** Create Object on Canvas **********/
	draw: 		function(ctx) {
				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.fillRect(this.getX()-(this.getWidth()/2),this.getY()- (this.getHeight()/2), this.width, this.height);
				ctx.stroke();
			},
			
	collide:	function(){
				var newX = this.getX() + (this.getWidth()/2)
				if(newX>=1000 || newX<=0){
					return false;
				}else{
						return true;
					}
				},
				
	
};