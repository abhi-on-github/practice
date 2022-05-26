/* 

Create a function that takes in one input, a deeply nested object, and returns a new flattened object.

Example:

flattenObject({
    key1: {
        keyA: 'valueI'
    },
    key2: {
        keyB: 'valueII'
    },
    key3: { a: { b: { c: 2 } } }
})

{
    'key1.keyA': 'valueI',
    'key2.keyB': 'valueII',
    'key3.a.b.c': 2
} 

*/

const flattenObject = nestedObject => {
  // write code here
let flattened = {};
for(let item in nestedObject){
  let tempKey = `${item}`;
  if(typeof nestedObject[item] === 'object'){
    let temp = `${item}`;
    const subFlattened = flattenObject(nestedObject[item]);
    let subFlattenedKeysCombined = {};
    for(let key in subFlattened){
      const keyCombined = `${temp}.${key}`;
      subFlattenedKeysCombined[keyCombined] = subFlattened[key];
    }
    flattened = {...flattened, ...subFlattenedKeysCombined};
  } else {
    flattened[item] = nestedObject[item];
  }
}
return flattened;
};


const result = flattenObject({
  key1: {
      keyA: 'valueI'
  },
  key2: {
      keyB: 'valueII'
  },
  key3: { a: { b: { c: 2 } } }
});

// {
//     'key1.keyA': 'valueI',
//     'key2.keyB': 'valueII',
//     'key3.a.b.c': 2
// };
console.log(result);



