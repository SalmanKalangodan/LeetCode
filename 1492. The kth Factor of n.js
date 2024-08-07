/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    
    const arr = [] 
    for (i = 0 ; i<=n ; i++){
        if(n%i === 0){
            arr.push(i)
        }
    }
    if(arr[k-1] === undefined){
        return -1
    }
    return arr[k-1]
};