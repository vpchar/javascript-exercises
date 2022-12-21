const add = (a,b) =>	a+b;

const subtract = (a,b) => a-b;

const sum = a => { //I HATE ES6 -- this is a virus!
  let sum =0; 
  a.forEach(element => {
     sum += element;
  });
  return sum;
}

const multiply = function(a) { //back to the old ways...
  let total = 1;
  a.forEach(element => {
    total *= element
  });
  return total;
};

const power = (a,b) => a ** b; //but we MUST be RELEVANT!

//...so at the end...

/* Started with:
const factorial = f =>{
  if (f < 0) 
    return -1;
  else if  (f == 0) 
    return 1;
  else {
   return (f * factorial(f - 1));
  }
  
}
// old school cpp coder here: tell me, HOW is this cleaner? 
// anyway, I'll at least write it 
// in human readable form:
const factorial = f => 
  f<0 
    ? -1 
    : f==0 
      ? 1 
      : (f * factorial(f - 1)); 
*/
//and that's what you show to the HR department:
const factorial = f => f<0 ? -1 : f==0 ? 1 : f * factorial(f - 1); 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
