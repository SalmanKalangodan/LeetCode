/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length ===0) return 0
    let res = 1
    for(i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[res] = nums[i]
            res ++
        } 
    }
    return res
};