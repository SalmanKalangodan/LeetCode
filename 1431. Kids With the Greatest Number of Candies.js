var kidsWithCandies = function(candies, extraCandies) {
    let lar = 0
    const arr = []
    for(i=0 ; i<candies.length; i++){
        if(candies[i]>lar){
            lar=candies[i]
        }
    }
    for(i=0 ; i<candies.length; i++){
        if(candies[i]+extraCandies >= lar){
           arr.push(true)
        }else{
            arr.push(false)
        }
        
    }
    return arr
};

console.log(kidsWithCandies(candies = [2,3,5,1,3], extraCandies = 3));
