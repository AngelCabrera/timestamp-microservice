// client-side js
// run by the browser each time your view template is loaded

var output = document.getElementById('output');
fetch("https://time-microservice-api.glitch.me/api/timestamp/2019-01-01").then(response => response.json()).then(data => output.innerHTML = JSON.stringify(data));

var output2 = document.getElementById('output2');
fetch("https://time-microservice-api.glitch.me/api/timestamp").then(response => response.json()).then(data => output2.innerHTML = JSON.stringify(data))