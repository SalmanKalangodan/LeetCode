/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num  <2 )return true
    const s =Math.sqrt(num)
    const b =Math.floor(s)
    if(s*b === num){
        return true
    }else {
        return false
    }
};