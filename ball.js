function Ball(){
	this.x = ;
	this.y = ;
	this.width = ;
	this.height = ;
	this.velX = ;
	this.velY = ;
	this.getX = function(){
		return this.x;
	};
	this.getY = function(){
		return this.y;
	};
	this.getWidth = function(){
		return this.width;
	};
	this.getHeight = function(){
		return this.height;
	};
	this.setVelX = function(velocityMod){ 
		this.velX += velocityMod;
	};
	this.setVelY = function(velocityMod){
		this.velY += velocityMod;
	};
	this.move = function(blocksArr, paddle){
		this.x += this.velX;
		this.y += this.velY;
		//check collision with blocks and arrays
	};
	this.flipX = function(){
		this.velX = -this.velX;
	};
	this.flipY = function(){
		this.velY = -this.velY;
	};
	this.draw = function(c){
		//move then draw
	};
}