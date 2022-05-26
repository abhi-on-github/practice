function getCommonChars(strA, strB){
  var commonCharStr = '', longerStr, shortStr;
      if(strA.length > strB.length){
          longerStr = strA;
          shortStr = strB;
      } else{
          shortStr = strA;
          longerStr = strB;
      }
  for(var i=0; i<shortStr.length; i++){
      if(longerStr.includes(shortStr[i]) && !commonCharStr.includes(shortStr[i])){
          commonCharStr+= shortStr[i];
      }
  }
  return commonCharStr;
}

getCommonChars('aecxivioeu', 'aiegihobue');