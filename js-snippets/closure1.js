var array = [1, 2, 4, 3, 5];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    setTimeout(function() {
      console.log(i);
      console.log(array[i]);
    });      
}

//Solution:
/*for (var i = 0; i < array.length; i++) {
    //console.log(array[i]);
  (function(i){
    setTimeout(function() {
      console.log(i);
      console.log(array[i]);
      });      
  })(i);
}*/
