// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://spreadsheets.google.com/feeds/cells/1_47RLiCIouIzly7XxcIdGZrXrErsA2pzn_mlK1_sKpc/1/public/full?alt=json', true)

request.onload = function () {
	var json = JSON.parse(this.response);
	for (i = 0; i < json.feed.entry.length; i++) {
		console.log(json.feed.entry[i].gs$cell.$t)
	}
}

// Send request
request.send()