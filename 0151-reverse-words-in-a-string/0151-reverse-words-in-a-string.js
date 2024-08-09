/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     return s.replace(/\n+/g, ' ').trim().split(/\s+/).reverse().join(" ");
}