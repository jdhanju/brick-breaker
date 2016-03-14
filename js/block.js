/**
 * Jaiveer Dhanju       100245432
 * Calvin Lui           100225224
 * Derek Yuan           100207884
 * CPSC 1045            Term Project
 *  
 * -insert Description here-
 **/

//Block cosntructor
function Block(x, y, width, height, color) {
	/** Create Data Variables **/
	this.x 		= x;
	this.y 		= y;
	this.width 	= width;
	this.height 	= height;
	this.top 	= this.y;
	this.bottom 	= this.y + this.height;
	this.left 	= this.x;
	this.right 	= this.x + this.width;
	this.color 	= color;
	
	/********** Accessor **********/
	this.getX = function() {
		return this.x;
	};
	this.getY = function() {
		return this.y;
	};
	this.getWidth = function() {
		return this.width;
	};
	this.getHeight = function() {
		return this.height;
	};
	
	/********** Mutators **********/
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
	
	/********** Create Object on Canvas **********/
	this.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
}
