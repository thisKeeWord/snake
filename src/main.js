// head out in global scope for testing purposes
$(document).ready(function () {

	// WHY NOT VAR HEAD OR VAR APPLE? DIDN'T SHOW THE CONSOLE.LOG
	head = new Head($('#board'));
	apple = new Apple($('#board'));
	// body = new Body();
	//snake movements
	$('body').on('keydown', function (e) {
		//left arrow
		if (e.keyCode === 37) {
			//console.log('pressed left');
			head.currentDirection = 'left';
			//this.currentDirection = 'left';
		}
		//up arrow
		if (e.keyCode === 38) {
			//console.log('pressed up');
			head.currentDirection = 'up';
		}
		//right arrow
		if (e.keyCode === 39) {
			//console.log('pressed right');
			head.currentDirection = 'right';
		}
		//down arrow
		if (e.keyCode === 40) {
			//console.log('pressed down');
			head.currentDirection = 'down';
		}
	});
	//end snake movements
});
