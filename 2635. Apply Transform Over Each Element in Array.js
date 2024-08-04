/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const narr = []

    for(i = 0 ; i<arr.length; i++){
        narr.push(fn(arr[i],i))
    }
    return narr
};