function isValid(str){
  var resultStack = [];
  for (let char of str){
      if(char == "]" || char == "}" || char == ")"){
          if(!resultStack.length)  return false;
          var lastChar = resultStack.pop();
          switch (lastChar){
              case "[":
                  if(char !== "]"){
                      return false;
                  }
                  break;
              case "{":
                  if(char !== "}"){
                      return false;
                  }
                  break;
              case "(":
                  if(char !== ")"){
                      return false;
                  }
                  break;
          }
      } else {
          resultStack.push(char);
      }
  }
  return !resultStack.length;
}


console.log(isValid('{}'));
console.log(isValid('{[]}'));
console.log(isValid('}'));
console.log(isValid('{]}'));