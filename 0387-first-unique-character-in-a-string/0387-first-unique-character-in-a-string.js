/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const res = new Map()
    for(i=0; i<s.length; i++){
        res.set(s[i],(res.get(s[i])||0)+1)
    }
  for(i=0; i<s.length; i++){
       if(res.get(s[i])===1){
        return i
       }
    }
   return -1
};