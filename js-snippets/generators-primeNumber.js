function getPrimesUpto(n){
  for(prime of getInfinitePrimes()){
      console.log(prime);
      if(prime >= n){
          break;
      }
  }
}

const getInfinitePrimes = function* (){
  yield 1;
  yield 2;
  yield 2;
  let i=4
  while(true){
      if(isPrime(i)){
          yield i;
      }
      i++;
  }
  primes.push(n);
}

function isPrime(n){
  if(n<=2)    return true;
  for(let i=2; i<n; i++){
      if(n%i == 0){
          return false;
      }
  }
  return true;
}

// console.log(isPrime(13))
console.log(getPrimesUpto(5));

