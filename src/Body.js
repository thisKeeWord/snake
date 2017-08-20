function Body() {
  // this.SPEED = head.SPEED;
  this.node = $('<div id="head"></div>');
  $("#board").append(this.node);
  this.next = null;
}