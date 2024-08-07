/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const arr =[]
let str =""
    for(i=0; i<s.length; i++){
        if(!str.includes(s[i])){            
            str+=s[i]
            if(i ==s.length-1){
                arr.push(str)
            }
        }else if(str.includes(s[i])){
            arr.push(str)
            str = s[i]
            if(i ==s.length-1){
                arr.push(str)
            }
        }else{
            str = s[i]
            arr.push(s[i])
            if(i ==s.length-1){
                arr.push(str)
            }
        }
    }
    return arr.length
};

console.log(partitionString(s = "abacaba"));
