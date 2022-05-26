var removeDuplicates = someArray => {
  let result = [];
  someArray.forEach((item, index) => {
      if(result.indexOf(item) === -1){
          result.push(item);
      }
  });
  return result;
}

console.log(removeDuplicates([1, 4, 5, 6, 8, 7, 8]));
