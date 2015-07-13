/**
 * Created by Ks89 on 12/07/15.
 */

//<!-- STREAMS SERVER-->
//<!-- on in Node is like addEventListener in JS-->

var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200,{"Content-Type": "test/plain"});
    request.on("data", function(chunk) {
        response.write(chunk.toString().toUpperCase());
    });
    request.on("end", function() {
        response.end();
    });
}).listen(8000);