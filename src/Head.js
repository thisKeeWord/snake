function Head($el) {
	this.node = $('<div id="head"></div>');
	this.currentDirection = 'right';
	this.SPEED = 50;
	$el.append(this.node);
  	this.next = null;
  	this.tail = this;
	this.node.css({ top: 9, left: 9 });

	setTimeout(this.move.bind(this), this.SPEED);

}

// function addBody() {
  
//   this.next = null;
// }

Head.prototype.move = function () {
	var direction = this.currentDirection;
	var position = this.node.position();
  
  // this.tail = this.head = head;
	//console.log(position);
	//move right
	if (direction === 'right') {
		position.left += 50;
		//console.log(position.left);
		//setTimeout(this.move.bind(this), this.SPEED);
	}
	//move left
	if (direction === 'left') {
		position.left -= 50;
		//console.log(position.left);
		//setTimeout(this.move.bind(this), this.SPEED);
	}
	//move up
	if (direction === 'up') {
		position.top -= 50;
		//console.log(position.top);
	}
	if (direction === 'down') {
		position.top += 50;
		//console.log(position.top);
	}
  

	//are you dead?
	if (position.top > 659 || position.top < -5 || position.left < -5 || position.left > 659) {
		alert("Game Over!");
    	location.reload();
		//		position.top = 0;
		//		position.left = 0;
		//console.log('game over');

	}
	console.log('apples position', apple.node.position().top);
	console.log('heads position', position.top);
	// if (head.node.position().top === apple.node.position().top && head.node.position().left === apple.node.position().left) {
	// 	alert('found Apple');
	// }
	if (position.top === apple.node.position().top && position.left === apple.node.position().left) {
    	$('#apple').remove();
    	apple = new Apple($('#board'));
    	this.getBig();  // calling prototype
  	}
 	this.growUp(); // calling prototype
  	this.node.offset(position);
  	setTimeout(this.move.bind(this), this.SPEED);
};

Head.prototype.growUp = function() {
 	var headsTop = this.node.position().top;
  	var headsLeft = this.node.position().left;
  
  	var addBody = this.next;
  	while(addBody !== null) {
	    var addBodysTop = addBody.node.position().top;
	    var addBodysLeft = addBody.node.position().left;
	    addBody.node.offset({ top: headsTop, left: headsLeft });
	    headsTop = addBodysTop;
	    headsLeft = addBodysLeft;
	    addBody = addBody.next;
	}
};

Head.prototype.getBig = function() {
	var someBody = new Body();
    var noBody = this.tail;
    noBody.next = someBody;
    this.tail = someBody;
};


  

