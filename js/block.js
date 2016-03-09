//Block cosntructor
function Block(x, y, width, height) {
	/** Create Data Variables **/
	this.x 		= x;
	this.y 		= y;
	this.width 	= width;
	this.height 	= height;
	
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
	}
}
