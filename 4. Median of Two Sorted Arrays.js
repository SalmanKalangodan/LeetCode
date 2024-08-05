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
        console.log(narr.length);
        
        return result
    }
};

console.log(findMedianSortedArrays(nums1 = [1,2], nums2 = [3,4]));
console.log(findMedianSortedArrays(nums1 = [1,3], nums2 = [2]));
console.log(findMedianSortedArrays(nums1 = [], nums2 = [2,3]));
console.log(findMedianSortedArrays(nums1 = [], nums2 = [1,2,3,4,5,6]));
