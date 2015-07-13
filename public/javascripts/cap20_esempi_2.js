/**
 * Created by Ks89 on 12/07/15.
 */

var figlet = require("figlet");

figlet.text("Hello world", function(error, data) {
    if(error) console.error(error);
    else console.log(data);
});