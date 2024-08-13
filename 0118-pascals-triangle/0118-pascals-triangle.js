/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = []
    for(i=0; i<numRows; i++){
        const arr = [1]
        if(i !==0){
            const old = res[i-1]
            for(j=1; j<i; j++){
                arr[j] = old[j-1] + old[j]
            }
            arr.push(1)
        }
        res.push(arr)
    }
    return res
};