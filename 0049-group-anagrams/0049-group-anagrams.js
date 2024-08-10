/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}

    for(let str of strs){
        let nstr = str.split("").sort().join("")
        if(!obj[nstr]){
            obj[nstr] = []
        }
        obj[nstr].push(str)
    }
    return Object.values(obj)
};