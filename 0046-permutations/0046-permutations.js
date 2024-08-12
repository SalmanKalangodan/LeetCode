/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const arr = [[]]
    while(arr.length){
        let n = arr.shift()
        if(n.length === nums.length){
            res.push(n)
        }else{
            for(let num of nums){
                if(!n.includes(num)){
                    arr.push([...n,num])
                }
            }
        }
    }
    return res
};