/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count
    let arr = []
    for(i=0; i<nums.length; i++){
        count = 0
        for(let x of nums){
            if(nums[i] > x){
                count++
            }
        }
        arr.push(count)
    }
    return arr
};