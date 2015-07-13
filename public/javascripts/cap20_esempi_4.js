/**
 * Created by Ks89 on 12/07/15.
 */

//server
//to test run also cap20_esempi_5.js

var http = require("http");
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello!</h1><p>You asked for <code>" + response.url + "</code></p>");
    response.end();
});
server.listen(8000);