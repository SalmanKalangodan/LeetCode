/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
   const length = num.toString(2).length
   const a = (1<<length)-1
   return num^a 
};