/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min =Infinity
    let total = 0
    for(i=0; i<prices.length; i++){
        if(prices[i] < min){
            min = prices[i]
        }
        if(prices[i] - min > total){
            total = prices[i]-min
        }
    }
    return total
};