function debounce(func, wait, immediate){
  var timeout;
  return function(){
      var cnxt = this, args = arguments, 
          callNow = immediate && !timeout;
      clearTimeout(timeout);
      if(callNow) func.apply(cnxt, args);
      setTimeout(function(){
          if(!callNow)    func.apply(cnxt, args);
      }, wait);
  }
}

var onResize = function(){
  console.log("event is called");
}

window.addEventListener('resize', debounce(onResize, 250, true));
window.addEventListener('resize', onResize);


