/**
 * Created by Ks89 on 12/07/15.
 */

module.exports = function(string) {
    return string.split("").map(function(ch) {
        return String.fromCharCode(ch.charCodeAt(0) + 5);
    }).join("");
}