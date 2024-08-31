/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const res = String(x).split("").reduce((total,val)=>total+Number(val),0)
    if(x%res ===0){
        return res
    }else{
        return -1
    }
};