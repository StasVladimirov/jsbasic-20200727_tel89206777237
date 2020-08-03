/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n){
  let a = n;
  while(a>1){
    a--;
    n*=a;
    
  }
   return n;
}
