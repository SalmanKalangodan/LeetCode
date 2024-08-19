/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = null
    let count =0
    for(i=0; i<nums.length; i++){
        if(count ===0){
            res = nums[i]
        }
        if(res===nums[i]){
            count++
        }else{
            count--
        }

    }
    return res
};