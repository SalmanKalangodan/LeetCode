// Input: p = [1,2,3], q = [1,2,3]
// Output: true


function  isSameTree (p, q){
    let c=[]
for(i=0; i<p.length; i++){
    if(p[i]==q[i]&&p.length===q.length){
        c.push(p[i]+q[i])
    }else{
        return false
    }
}
if(c.length===p.length){
    return true
}

   }

   console.log(isSameTree( p=[1,2,3], q = [1,2,3]) )