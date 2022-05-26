function loopWithMistake() {
  for(var i=0; i++<Math.pow(10, 10);){
      console.log(i*i);
  }
}

function loopWithoutMistake() {
  for(var i=0, max = Math.pow(10, 10); i<max; i++){
      console.log(i*i);
  }
}

function fasterLoop() {
  for(const i=Math.pow(10, 10); i--;){
      console.log(i*i);
  }
}

loopWithoutMistake();
