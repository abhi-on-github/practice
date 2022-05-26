var input = [
  [[5, 7], [30, 45]],      //Device 1
  [[6, 8], [12, 28], [28, 40]],      //Device 2
  [[5, 9], [9, 12], [27, 35]]      //Device 3

]

//output: [[5, 9], [9, 28], [27, 45]]

function transform(input){
  let simpleArray = [];
  for(let i=0; i<input.length; i++){
      const device = input[i];
      for(let j=0; j<device.length; j++){
          simpleArray.push(device[j]);
      }
  }
  return simpleArray;
}

console.log(transform(input));