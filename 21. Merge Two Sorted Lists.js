/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let len 
    const arr = []
   if(list1.length > list2.length){
      len =  list2.length
   }else if(list1.length === list2.length){
       len = list1.length
   }
   else {
       len =  list1.length
   }

   for(i = 0 ; i<len ; i++){
      arr.push(list2[i], list1[i])
      console.log(arr);
      
   }
 const  narr = arr.sort()
   return narr

   // return [...list1...list2].sort((a,b)=>a-b)
};

console.log(mergeTwoLists([1,2,3],[3,4,2]));
