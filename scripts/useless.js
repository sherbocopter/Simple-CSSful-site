var mousePosX = 0;
var mousePosY = 0;
var uselessSpeed = 10;
var uselessPadding = 2;
var uselessSize = 30;

function initUseless() {
	var useless = $("#uselessId");
	
	useless.css("left", mousePosX + "px");
	useless.css("top", mousePosY + "px");
	useless.css("width", uselessSize + "px");
	useless.css("height", uselessSize + "px");
	
	var interval = setInterval(function() {
			var left = parseInt(useless.css("left"));
			var top = parseInt(useless.css("top"));
			var width = parseInt(useless.css("width"));
			var height = parseInt(useless.css("height"));
			
			if (mousePosX < left + uselessPadding || mousePosX > left + width - uselessPadding ||
				mousePosY < top + uselessPadding || mousePosY > top + height - uselessPadding) {
				var deltaX = mousePosX - left;
				var deltaY = mousePosY - top;
				
				var len = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				useless.css("left", left + (deltaX / len) * uselessSpeed + "px");
				useless.css("top", top + (deltaY / len) * uselessSpeed + "px");
				
				useless.css("backgroundColor", "red");
			}
			else {
				useless.css("backgroundColor", "green");
			}
		}, 16);
}

initUseless();

$("body").mousemove(function(e) {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
});