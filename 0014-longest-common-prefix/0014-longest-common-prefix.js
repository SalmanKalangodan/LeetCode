/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(strs.length === 0){
    return ""
   }
    let len = Math.min(...strs.map(str => str.length))
    let res = ""
    for(i=0 ; i<len; i++){
         let cstr = strs[0][i]
         if(strs.every(str => str[i] === cstr)){
            res+= cstr
         }else{
           break;
         }
    }
    return res
    
};