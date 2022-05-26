function countThrees(aList){
  var count = 0;
  for(let num of aList){
      if(Array.isArray(num)){
          count += countThrees(num);
      } else {
          if(num == 3){
              count++;                
          }
      }
  }
  return count;
}


countThrees([1, 2, [4, 3, 5], [[1, 5, 6, 3], 7, 3], 6, 3])