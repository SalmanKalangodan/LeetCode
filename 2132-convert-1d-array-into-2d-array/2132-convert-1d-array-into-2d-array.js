/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if (original.length !== m * n) {
        return [];
    }
        const res = [];
    
    for (let i = 0; i < m; i++) {
        const row = original.slice(i * n, (i + 1) * n);
        res.push(row);
    }
    
    return res;

};