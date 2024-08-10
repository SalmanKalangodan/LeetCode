/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    for (i=0 ; i<nums.length; i++){
        for(j=0 ; j<nums.length; j++){
            if(nums[i]+nums[j] === target && i !==j){
                 arr.push(i, j)
                 return arr
            }
        }
    }
};