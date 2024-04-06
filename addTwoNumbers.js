// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
var addTwoNumbers = function(l1, l2) {
 const str1=l1.reverse().join("")
 const str2=l2.reverse().join('')
  const str3=Number(str1)
  const str4=Number(str2)
  const str5=String(str3+str4).split("")
 return str5.reverse()
};
console.log(addTwoNumbers(l1 = [2,4,3], l2 = [5,6,4]))
console.log(addTwoNumbers(l1 =[1,2,3] ,l2=[2,3,4]))