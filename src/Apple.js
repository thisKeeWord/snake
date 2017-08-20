function Apple($el) {
	this.node = $('<img id="apple"></img>');
	this.node.attr('src', 'src/assets/apple.jpg');
	$el.append(this.node);
	var position = this.node.position();
	position.top = Math.floor(Math.random() * 13) * 50 + 9;
	position.left = Math.floor(Math.random() * 13) * 50 + 9;
	this.node.css({
		top: position.top,
		left: position.left
	});
	//executes & returns position
	this.node.offset(this.node.css);
	//console.log("Apple: ", this.position);
}

//Apple.prototype.set = function () {
//
//	//randomize position
//};
