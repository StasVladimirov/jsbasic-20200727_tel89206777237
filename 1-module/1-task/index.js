/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
  function factorial(n) {
  let a=1;
  while(n){
    a*=n--;
    }
  return a;
}

alert(factorial (6))
