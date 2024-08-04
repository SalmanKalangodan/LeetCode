/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = []
    let v= "aeiou"
    let str = ""
    for(i=0 ; i<s.length; i++){
      if(v.includes(s[i])){
         arr.push(s[i])
      }
    }
    for (let i = 0; i < s.length; i++) {
        if (v.includes(s[i])) {
            str += arr.pop(); 
            console.log(str);
            
        } else {
            str += s[i];
        }
    }

    return str;
 };

 console.log(reverseVowels("hello"));
 