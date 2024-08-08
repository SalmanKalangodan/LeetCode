/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let count =0
   for(i=0; i<nums.length ; i++){
    for(let x of nums){
        if(x === nums[i]){
            count++
          }
    }
    if(count ===1){
        return nums[i]
    }
    count =0
   } 
};
