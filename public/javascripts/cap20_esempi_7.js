/**
 * Created by Ks89 on 12/07/15.
 */

//<!-- STREAMS CLIENT-->
//<!-- on in Node is like addEventListener in JS-->

var http = require("http");
var request = http.request({
    hostname: "localhost",
    path: "8000",
    method: "POST"
}, function(response) {
    response.on("data", function (chunk) {
        process.stdout.write(chunk.toString());
    });
});
request.end("Hello server");