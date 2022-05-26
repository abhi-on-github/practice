// a - c
// n=1 -> ['a', 'b', 'c']
// n=2 -> [ "aa",  "ab",  "ac",  "ba",  "bb",  "bc",  "ca",  "cb",  "cc"]
// n=3 -> ["aaa", "aab", "aac", "aba", "abb", "abc", "aca", "acb", "acc",
//         "baa", "bab", "bac", "bba", "bbb", "bbc", "bca", "bcb", "bcc",
//         "caa", "cab", ...]

function combinations(n){
  let letters = ['a', 'b', 'c'];
  let result = [];
  let combinations = combinations(n - 1);
  if(n = 1){
      return letters;
  }  
  for (let i = 0; i < combinations.length; i++){
    for(let j = 0; j<letters.length; j++){
        result.push(letters[j]+combinations[i]);
    }
  }
  return result;
}

console.log(combinations(2));