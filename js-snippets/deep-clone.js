function deepClone(obj){
  if(Array.isArray(obj) || obj === null){
    return obj;
  }
  const newObj = {};
  for(var key in obj){
    if(typeof obj[key] === 'string' || typeof obj[key] === 'number'){
      newObj[key] = obj[key];
    }
    if(Array.isArray(obj[key])){
      obj[key].forEach(entry => deepClone(entry));
    }
    else{
      deepClone(obj);
    }
  }
  return newObj;
}

// function deepClone(obj, result={}){  
//   const objKeys = Object.keys(obj) //->  return
//   //clone
//   for(const key of objKeys){
//     console.log(key);
//     if(typeof obj[key] === 'string' || typeof obj[key] === 'number'){
//       result[key] = obj[key];
//     } else if(Array.isArray(obj[key])){  //array
//         result = result || [];
//         obj[key].forEach(entry => deepClone(entry), result);    
//     } else {  //object
//       const newCopy = {...obj[key]};
//       console.log(newCopy);
//       deepClone(newCopy, result);
//     }      
//   }  
// }

//const a = { foo: 'bar', obj: { a: 1, b: 2 }, arr: [1, 2, {c: 3}], falsyValue: undefined };
const a = { foo: 'bar', obj: { a: 1, b: 2 }, arr: [1, 2, {c: 3}], falsyValue: undefined };

const b = deepClone(a); // a !== b, a.obj !== b.obj
console.log(b);

console.log(JSON.stringify(a), JSON.stringify(b));
console.log(a !== b, a.obj !== b.obj);