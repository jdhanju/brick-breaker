function Ball(x, y, radius, velX, velY, color) {
	/** Create Data Values **/
	this.x 			= x;
	this.y 			= y;
	this.radius 	= radius;
	this.velX 		= velX;
	this.velY 		= velY;
	this.color 		= color;
	this.top		= this.y - this.radius;
	this.bottom		= this.y + this.radius;
	this.left		= this.x - this.radius;
	this.right		= this.x + this.radius;
	
	/********** Accessors **********/
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
	
	/************** Mutators **************/
	this.setVelX = function(velocityMod){ 
		this.velX += velocityMod;
	};
	this.setVelY = function(velocityMod){
		this.velY += velocityMod;
	};
	
	/********** Editing Location Of Object **********/
	this.move = function(blocksArr, paddle){
		this.x += this.velX;
		this.y += this.velY;
		var newArr = withinRange(blocksArr, paddle);
		
		if (newArr.length > 0) {
			this.wallCollision();
			this.blockCollision(newArr, paddle);
		}
	};
	
	this.wallCollision = function() {
		if (this.x > canvas.width - this.radius || this.x < this.radius)
			this.flipX();
		
		if (this.y > canvas.height - this.radius || this.y < this.radius)
			this.flipY();
	};
	
	this.blockCollision = function(blocksArr, paddle) {
		for(var j = 0;j < blocksArr.length;j++) {
			if (this.bottom >= blocksArr[j].top && this.top <= blocksArr[j].bottom && 
				this.left <= blocksArr[j].right && this.right >= blocksArr[j].left)
				this.flipX();
			
			if (this.left <= blocksArr[j].right && this.right >= blocksArr[j].left && 
				this.top <= blocksArr[j].bottom && this.bottom >= blocksArr[j].top)
				this.flipY();
		}
	}
	
	this.withinRange = function(blocksArr, paddle) {
		var newArr = [];
		var range = this.radius + 10;
		
		for (var k = 0;k < blocksArr.length; k++) {
			if (this.x + range > blocksArr[k].x || this.x - range < blocksArr[k].x || 
				this.y + range > blocksArr[k].y || this.y - range < blocksArr[k].y)
				newArr.push(blocksArr[k]);
		}
		
		return newArr;
	}
	
	this.flipX = function(){
		this.velX = -this.velX;
	};
	this.flipY = function(){
		this.velY = -this.velY;
	};
	
	/********** Create Object On Canvas **********/
	this.draw = function(c){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.stroke();
	};
}
