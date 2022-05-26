function meanderingArray(unsorted) {
  // Write your code here
  const sortedArray = unsorted.sort((a,b) => a-b),
  result = [];
  let i=0, j=sortedArray.length-1;
  while(i+1!==j){
      result.push(sortedArray[j]);
      result.push(sortedArray[i]);
      ++i, --j;
  }
  return result;
}

console.log(meanderingArray([7,5,2,7,8,-2,25,25]))
