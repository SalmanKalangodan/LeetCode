// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


var isPalindrome = function(x) {
    const rev = x.toString().split('').reverse().join('')
    if(x==rev){
        return true
    }else{
        return false
    }
};

var romanToInt = function(s) {
    const arr = s.split("")
    console.log(arr);
   let a= 0
   arr.map((value)=>{
       if(value=="I"){
        a+= 1
       }
    },0)
    return a
};

console.log(romanToInt('III') );