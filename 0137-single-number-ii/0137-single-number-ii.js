/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let count =0
   const arr = []
   for(i=0; i<nums.length ; i++){
    for(let x of nums){
        if(x === nums[i]){
            count++
          }
    }
    arr.push(count)
    count =0
   } 
   for(j =0 ; j<arr.length; j++){
    if(arr[j] === 1){
        return nums[j]
    }
   }
};
