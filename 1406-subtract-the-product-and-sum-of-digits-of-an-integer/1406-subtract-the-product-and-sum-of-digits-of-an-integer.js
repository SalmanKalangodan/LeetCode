/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   const arr = [n].join("").split("")
   let pluse =0
   let multi = 1
   for(i= 0 ; i<arr.length; i++){
    let num = parseInt(arr[i])
      multi *= num
      pluse += num
   }
    return multi - pluse
    
};