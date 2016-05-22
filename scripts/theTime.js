function startTheTime() {
	var interval = setInterval( function() {
			var dateNow = new Date();
			var h = dateNow.getHours();
			var min = dateNow.getMinutes();
			var sec = dateNow.getSeconds();
			document.getElementById("theTimeId").innerHTML = h + ":" + min + ":" + sec;
		}, 1000);
}

startTheTime();