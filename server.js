var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello DoED Testing123');
    response.end();
}

http.createServer(onRequest).listen(8080);
