for(let i=0; i<20; i++){
  let button = document.createElement('button')
  button.setAttribute("id", i);
  button.onClick = () => alert(i);    
}
