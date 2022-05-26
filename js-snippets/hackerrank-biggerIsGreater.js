function biggerIsGreater(w) {
  let wArr = w.split('');
  for (let i=wArr.length-1; i>=0; i--){
      for(let j=(wArr.length-1)-1; j>=0; j--){
          if(wArr[i] >wArr[j]){
              let temp = wArr[j];
              wArr[j] = wArr[i];
              wArr[i] = temp;
              return wArr.join('');
          }
      }
  }
}
//biggerIsGreater('ab')
//biggerIsGreater('bb')
//biggerIsGreater('hefg')
//biggerIsGreater('dhck')
biggerIsGreater('dkhc')
