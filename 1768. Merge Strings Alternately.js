/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len 
    let rel =""
    if(word1.length > word2.length){
        len = word1.length 
    } else{
        len =word2.length
    }
    for(i=0; i<len ; i++){
        // rel+=word1[i]
        // rel+=word2[i]
      if(word1.length>i){
        rel+=word1[i]
      }
      if(word2.length >i){
        rel+=word2[i]
      }
    }
    return rel
};