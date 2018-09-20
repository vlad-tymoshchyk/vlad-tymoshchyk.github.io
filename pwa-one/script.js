fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then(response => {
		response.json()
	})
	.then(data => {
		console.log(data);
		console.log("text");
	})

console.log("data:");

function curl(url) {
	let req = new XMLHttpRequest();
	req.open('get', url, true);
	req.send();
	req.onreadystatechange = function(response) {
		if(req.readyState == '4') {
			console.log("done: " + response);
			window.resp = response;
		}
	}
}

