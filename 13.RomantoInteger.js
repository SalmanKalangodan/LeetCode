var romanToInt = function(s) {
 const value = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};
  let count = 0
 for (i = 0 ; i<s.length ; i++){
    const curent = value[s[i]]
    const nextval = value[s[i+1]]

    if(nextval && curent<nextval){
      count -= curent
    }else{
      count+=curent
    }
 }

 return count
};