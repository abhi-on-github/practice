var steps = n => {
  for(let i =0; i<n; i++){
      let stair = '';
      for(let j=0; j<n; j++){
          if(j>i){
              stair += "s";
          } else {
              stair += "#";
          }
      }
      console.log(stair);
  }
}
steps(4);
