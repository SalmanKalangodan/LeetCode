var isValid = function(s) {
    const data = s.split('')
    console.log(data);
    let result = true 
   for (i = 0 ; i<data.length; i++){
        if(data[i] == "(" && data[i+1] == ")"){
          return result = true
        }else if(data[i] == "[" && data[i+1] == "]"){
           return result = true
        }else if(data[i] == "{" && data[i+1] == "}"){
            return  result = true
        }else{
            return result = false
        }
   }

    return result
};


console.log(isValid("("));


