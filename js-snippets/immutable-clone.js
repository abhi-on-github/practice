function deepCloneObject(obj){
  return JSON.parse(JSON.stringify(obj));
}

var arr = [4, 1, 6, 3, 5];

console.log(deepCloneObject(arr).sort());