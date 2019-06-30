var http = require("http");

var server = http.createServer(function(req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("<html><body>This is Home Page.</body></html>");
	res.end();
});

server.listen(5000);
console.log("node server is running...");
