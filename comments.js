// Create web server
// Create web server
var http = require('http');
var fs = require('fs');

// Create a server object
http.createServer(function (req, res) {
    // Read the file
    fs.readFile('comments.html', function (err, data) {
        // Write the response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Write the response content
        res.write(data);
        // End response
        return res.end();
    });
}).listen(8080); // Server object will listen on port 8080
