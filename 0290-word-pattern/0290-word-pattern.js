/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(" ")
    if(pattern.length !== arr.length) return false
    const a= new Map()
    const b = new Map()
    for(i=0; i<pattern.length; i++){
       let pe = pattern[i]
       let se= arr[i]
       if(a.has(pe)&&a.get(pe) !== se){
        return false
       }
       if(b.has(se) && b.get(se) !== pe){
        return false
       }
       a.set(pe , se)
       b.set(se , pe)
    }
    return true
};