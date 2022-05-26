function birthdayCakeCandles(ar) {
  let tallest = 0, noOfTallest=0;
  for(let i of ar){
      if(i>tallest){
          tallest = i;
          noOfTallest = 1;
          continue;
      }
      if(i == tallest){
          noOfTallest++;
      }
  }
  return noOfTallest;
}
birthdayCakeCandles([3,2,1,3]);