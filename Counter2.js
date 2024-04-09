// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4


const counter =(init, calls)=>{
   const narr = [] ;
   let number  = init
   calls.map((value)=> value==="increment" ? narr.push(number+=1):value==="decrement"?narr.push(number-1):value==="reset"?narr.push(init)&&value==="reset"?number = init: null:null)
   return narr;
}

console.log(counter(init = 5, calls = ["increment","reset","decrement"]));  // output = [6 , 5 , 4]
console.log(counter( init = 0, calls = ["increment","increment","decrement","reset","reset"])); //[1,2,1,0,0]