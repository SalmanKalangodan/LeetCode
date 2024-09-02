/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);
    let score = maxVal - minVal - 2 * k;
    return Math.max(0, score);
};