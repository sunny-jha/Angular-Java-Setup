var http = require('http');
var fs = require('fs');
var html = fs.readFileSync('index.html');
const PORT = 1992;

function handleRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html);
}
  
// create a server
var server = http.createServer(handleRequest);
 
// start the server
server.listen(PORT, function() {
    console.log("server is listening on http://localhost:%s", PORT);
});