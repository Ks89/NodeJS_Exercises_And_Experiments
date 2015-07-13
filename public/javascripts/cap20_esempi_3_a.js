/**
 * Created by Ks89 on 12/07/15.
 */

var fs = require("fs");

fs.readFile("../file.txt", "utf8", function(error, buffer) {
    if(error) throw error;
    console.log("The file contained", buffer.length, "bytes.","The first byte is:", buffer[0]);
});