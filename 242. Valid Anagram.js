// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
 
//      let res 
//     let len
//      if(s.length <= t.length){
//         len = t.length
//      }else{
//         len = s.length
//      }
//     for(i = 0 ; i<len; i++){
//       if(res === false){
//         return false
//       }
//       if(s.includes(t[i])){
//         res = true
//       }else{
//         res = false
//       }
//     }
//     return res
// };/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1;
    }
 console.log(count);
 
    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram(s = "anagram", t = "nagaram"));
console.log(isAnagram(s = "rat", t = "car"));
console.log(isAnagram(s="sb" ,t ="s"))
console.log(isAnagram(s =
    "aacc",t =
    "ccac"));

