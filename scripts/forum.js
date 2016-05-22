var fileName = "../files/forumLog.txt";

$("#sendMessageFormId").submit(function(e) {
    e.preventDefault();
});

function sendMessage() {
	var form = document.forms["sendMessageForm"];
	
	if (form["fNickname"].value == "") {
		alert("Please enter a nickname.");
		return;
	}
	
	if (form["fMessage"].value == "") {
		alert("Cannot send empty message.");
		return;
	}
	
	var nowDate = new Date();
	var forumPost = {
			date: nowDate.toString(),
			name: form["fNickname"].value,
			message: form["fMessage"].value
		};
	postForumPost(forumPost);
	
	form["fMessage"].value = "";
}

function postForumPost(forumPost) {
	var forum = document.getElementById("forum");
	
	var postdiv = document.createElement("div");
	postdiv.style.overflow = "hidden";
	postdiv.setAttribute("toggled", "false");
		postdiv.appendChild(document.createElement("hr"));
		
		var nickname = document.createElement("h3");
			var nicknameText = document.createTextNode(forumPost["name"]);
			nickname.appendChild(nicknameText);
		postdiv.appendChild(nickname);
		
		var date = document.createElement("p");
			var dateText = document.createTextNode(forumPost["date"]);
			date.appendChild(dateText);
		postdiv.appendChild(date);
		
		var message = document.createElement("p");
			var messageText = document.createTextNode(forumPost["message"]);
			message.appendChild(messageText);
		postdiv.appendChild(message);
	
	//forum.innerHTML = postdiv.outerHTML + forum.innerHTML;
	forum.insertBefore(postdiv, forum.children[0]);
	postdiv.addEventListener("click", function() {
		if (postdiv.getAttribute("toggled") === "false") {
			postdiv.style.height = "55px";
			postdiv.setAttribute("toggled", "true");
		}
		else {
			postdiv.style.height = "auto";
			postdiv.setAttribute("toggled", "false");
		}
	});
}

function formatPost(forumPost) {
	var text = "";
	text += forumPost["date"] + "#";
	text += forumPost["name"] + "#";
	text += forumPost["message"];
	return text;
}

var forumLog = [
		{
			name: "Gheorghe Intaiul",
			date: "Sun May 22 2016 19:11:04 GMT+0300 (GTB Daylight Time)",
			message: "Lorem ipsum Lorem ipsum Lorem ipsum Ana are mere Lorem ipsum Lorem ipsum"
		},
		{
			name: "Gheorghe Secundul",
			date: "Sun May 22 2016 19:12:51 GMT+0300 (GTB Daylight Time)",
			message: "Ana are mere Ana are mere Ana are mere Ana are mere Ana are mere Ana are mere"
		}
	];

function loadForumPosts() {
	for (i = 0; i < forumLog.length; ++i) {
		postForumPost(forumLog[i]);
	}
}

loadForumPosts();