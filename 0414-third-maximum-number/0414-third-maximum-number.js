/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const arr = Array.from(new Set(nums))
    const res = arr.sort((a,b)=>b-a)
    const max = res[0]
    return res[2] == null? max : res[2] 

};