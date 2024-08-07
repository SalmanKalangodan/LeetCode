/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (i=0 ; i<nums.length ; i++){
        if(nums[i]===0){
            nums.push(nums.splice(nums.indexOf(nums[i]), 1)[0]);
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]));
