/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

    const arr = []

    for(i=left ; i<=right ; i++){
        if(isSelfDividing(i)){
            arr.push(i)
        }
       
    }
    return arr
};

function isSelfDividing(num) {
    let str = String(num);
    
    for (let char of str) {
        let digit = Number(char);
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
    }

    return true;
}

console.log(selfDividingNumbers(left = 1, right = 22));
