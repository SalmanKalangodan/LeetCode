/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
   
    let numStr = '';
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 96).toString();
    }

    
    while (k > 0) {
        let sum = 0;
        for (let digit of numStr) {
            sum += parseInt(digit);
        }
        numStr = sum.toString(); 
        k--;
    }

    return parseInt(numStr);
};