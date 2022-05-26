/* 

Create a function that takes in one input, a nested array, and returns a new flattened array.

Example:

flattenArray([1,[2,3],[4,5,[6]]]) => [1,2,3,4,5,6]
flattenArray([1,[2,3],[4,5,[6]], [7, [8, [9, [10]]]]]) => [1,2,3,4,5,6, 7, 8, 9, 10]

flattenArray([1,2,[3],[4,5,[6]], [7, 8], [9, 10]])

*/

const flattenArray = nestedArray => {
  //write code here
let flattened = [];
nestedArray.forEach(item => {
  if(Array.isArray(item)){
    flattened = [...flattened, ...flattenArray(item)];
  } else {
    flattened.push(item);
  }      
});
return flattened;  
};

const result1 = flattenArray([1,[2,3],[4,5,[6]]])  // => [1,2,3,4,5,6]
//console.log(result1);

const result2 = flattenArray([1,[2,3],[4,5,[6]], [7, [8, [9, [10]]]]]);
//console.log(result2);

const result3 = flattenArray([1,2,[3],[4,5,[6]], [7, 8], [9, 10]]);
//console.log(result3);




