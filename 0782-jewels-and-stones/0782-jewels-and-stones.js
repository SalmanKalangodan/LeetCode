/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let res = 0
    for(i=0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
            res++
        }
    }
    return res
};