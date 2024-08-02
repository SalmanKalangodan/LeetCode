var lengthOfLastWord = function(s) {
    const data = s.split(' ').reverse()
    const ndata= data.filter((val)=> val.length !=0 )
   return ndata[0].length
};

