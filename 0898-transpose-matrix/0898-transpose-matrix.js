/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const arr = []

    for(i=0; i<matrix[0].length; i++){
        let narr = []
        for(j=0; j<matrix.length; j++){
            narr.push(matrix[j][i])
        }
        arr.push(narr)
        narr = []
    }
    return arr
};