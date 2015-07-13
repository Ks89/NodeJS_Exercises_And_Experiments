/**
 * Created by Ks89 on 12/07/15.
 */

//client
//to test run also cap20_esempi_4.js

var http = require("http");
var request = http.request({
    hostname: "pippo.net",
    path: "/20_node.html",
    method: "GET",
    headers: {Accept: "test/html"}
}, function (response) {
    console.log("Server responded with status code", response.statusCode);
});
request.end();