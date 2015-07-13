/**
 * Created by Ks89 on 12/07/15.
 */

var fs = require("fs");

fs.writeFile("../graffiti.txt", "Node was here", function(err) {
    if(err) console.log("Failed to write file: ", err);
    else console.log("The written");
});