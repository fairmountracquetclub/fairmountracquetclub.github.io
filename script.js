// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOlhdC0v8wanyexE4oifdku2PIRWaUtwAmfvye11A-NKy8NnL7xLR1Qbqew0Ev8ZUu8FFqHk_HDJcj/pub?output=csv', true)

request.setRequestHeader("Access-Control-Allow-Origin", "*")

request.onload = function () {
  var data = this.response
  console.log(data)
}

// Send request
request.send()