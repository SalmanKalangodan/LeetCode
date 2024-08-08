/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const narr = [...nums1,...nums2].sort((a,b)=> a-b)
    if(narr.length%2===0){
        const index = narr.length/2
        const result = narr[index-1]+narr[index]
        return result/2   
    }else{
        const index = Math.floor(narr.length/2)       
        const result = narr[index]
        return result
    }
};