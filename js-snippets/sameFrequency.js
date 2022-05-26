function sameFrequency(...args){
  // good luck. Add any arguments you deem necessary.
  const [num1, num2] = args;
  const num1Str = num1.toString();
  const num2Str = String(num2);
  const num1Map = {};
  const num2Map = {};
  if(num1.length !== num2.length)   return false;

  for(let i=0; i<num2Str.length; i++){
      num1Map[num1Str[i]] = (num1Map[num1Str[i]] || 0) +1;
      num2Map[num2Str[i]] = (num2Map[num2Str[i]] || 0) +1;
  }
  for(let key in num1Map){
      if(num1Map[key] !== num2Map[key]){
          return false;
      }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879358));
console.log(sameFrequency(22, 222));

