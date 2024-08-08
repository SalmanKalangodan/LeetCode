/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const number = BigInt(num.join(""))
    const pluse = String(number+BigInt(k)).split("")
   return pluse 
};