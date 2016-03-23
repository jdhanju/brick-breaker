/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

//Ball constructor
function Ball(x, y, radius, velX, velY, color) {
	/********** Create Data Values **********/
	this.x 		= x;
	this.y 		= y;
	this.radius = radius;
	this.velX 	= velX;
	this.velY	= velY;
	this.color 	= color;
	this.top	= this.y - this.radius;
	this.bottom	= this.y + this.radius;
	this.left	= this.x - this.radius;
	this.right	= this.x + this.radius;
	
	/************** Mutators **************/
	this.setX = function(x) {
		this.x = x;
	};
	this.setY = function(y) {
		this.y = y;
	};
	this.setWidth = function(width) {
		this.width = width;
	};
	this.setHeight = function(height) {
		this.height = height;
	};
	this.setVelX = function(velocityMod){ 
		this.velX += velocityMod;
	};
	this.setVelY = function(velocityMod){
		this.velY += velocityMod;
	};
	
	/********** Editing Location Of Object **********/
	var lastFlipped = false;
	
	this.wallCollision = function(ctx) {
		if (this.x > ctx.canvas.width - this.radius || this.x < this.radius)
			this.flipX();
		
		if (this.y > ctx.canvas.height - this.radius || this.y < this.radius)
			this.flipY();
	};
	
	this.blockCollision = function(blocksArr, paddle) {
		for(var j = 0;j < blocksArr.length;j++) {
			if (this.bottom >= blocksArr[j].top && this.top <= blocksArr[j].bottom && 
			   ((this.left <= blocksArr[j].right && this.right >= blocksArr[j].right) || (this.left <= blocksArr[j].left && this.right >= blocksArr[j].left))){
				if (!lastFlipped) {
					this.flipX();
					lastFlipped = true;
				}
				return j;
			} else if (this.left <= blocksArr[j].right && this.right >= blocksArr[j].left && 
			          ((this.top <= blocksArr[j].bottom && this.bottom >= blocksArr[j].bottom) || (this.top <= blocksArr[j].top && this.bottom >= blocksArr[j].top))) {
				if (!lastFlipped) {
					this.flipY();
					lastFlipped = true;
				}
				return j;
			}
		}
		lastFlipped = false;
		return -1;
	}
	/*
	this.withinRange = function(blocksArr, paddle) {
		var newArr = [];
		var range = this.radius + 10;
		
		for (var k = 0;k < blocksArr.length; k++) {
			if (this.x + range > blocksArr[k].x && this.x - range < blocksArr[k].x && 
				this.y + range > blocksArr[k].y && this.y - range < blocksArr[k].y)
				newArr.push(blocksArr[k]);
		}
		
		return newArr;
	}*/
	
	this.move = function(blocksArr, paddle, ctx){
		this.x += this.velX;
		this.y += this.velY;
		
		this.updatePosition();
		this.wallCollision(ctx);
		return this.blockCollision(blocksArr, paddle);
	};
	
	this.updatePosition = function() {
		this.top	= this.y - this.radius;
		this.bottom	= this.y + this.radius;
		this.left	= this.x - this.radius;
		this.right	= this.x + this.radius;
	}
	
	this.flipX = function(){
		this.velX = -this.velX;
	};
	this.flipY = function(){
		this.velY = -this.velY;
	};
	
	/********** Create Object On Canvas **********/
	this.draw = function(ctx){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.stroke();
	};
}


if(javieer == gay) {
	javieer = smiles;
} else {
	derek = gay;
}

return (javieer == gay) ? javieer = smiles : derek = gay;





