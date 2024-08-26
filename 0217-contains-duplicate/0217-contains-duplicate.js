/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const abc = new Map()
    for(i=0;i<nums.length; i++){
        if(abc.has(nums[i])){
            return true
        }
        abc.set(nums[i],1)
    }
    return false
};