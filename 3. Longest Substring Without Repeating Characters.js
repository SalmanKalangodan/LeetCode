// var lengthOfLongestSubstring = function(s) {
//     const arr = []
//     let str = ""
//     for(i=0; i<s.length; i++){
//       if(!str.includes(s[i])){
//         str += s[i]
//         if(i === s.length-1){
//             arr.push(str)
//         }
//       }else if(s.includes(s[i])){
//          null
//       }
//       else{
//          arr.push(str)
//          str = ""
//          str+=s[i]
//       }
//     }
//     let len = 0
//     for(x of arr){
//         if(x.length > len){
//             len = x.length
//         }
//     }
//     return len
// };

// console.log(lengthOfLongestSubstring(s = "dvdf"));
// // console.log(lengthOfLongestSubstring(s= "pwwkew"));
// // console.log(lengthOfLongestSubstring(s= " "));
// // console.log(lengthOfLongestSubstring(s= "bbbbb"));
// // console.log(lengthOfLongestSubstring(s= "c"));

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = new Map(); // To store the last positions of occurrence
    let start = 0; // Starting index of current substring
    let maxLength = 0; // Maximum length of substring without repeating characters

    for (let end = 0; end < s.length; end++) {
        const char = s[end];


        // If the character is already in the map, move the start to the right of the previous position
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
            console.log(seen.has(char));
            
        }

        // Update the last position of the character
        seen.set(char, end);

        // Calculate the max length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

// Example test cases
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring(" ")); // Output: 1
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("c")); // Output: 1
