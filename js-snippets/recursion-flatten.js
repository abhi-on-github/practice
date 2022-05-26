function flatten (d) {
  let keys = Object.keys(d),
      result = {};
  console.log(keys);
  keys.forEach(key => {
    if(typeof d[key] !== 'number'){
      result = {...result, ...flatten(d[key])};
      //Object.assign(result, flatten(d[key]));
    } else {
      result[key] = d[key];
    }
  });
  return result;
}

var d = {
  'a': 5,
  'b': 6,
  'c': {
    'f': 9,
    'g': {
      'm': 17,
      'n': 3
    }
  }
}
console.log(flatten(d));
