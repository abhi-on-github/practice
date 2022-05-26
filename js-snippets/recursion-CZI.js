/*

You are building an educational website and want to create a simple calculator for students to use. The calculator will only allow addition and subtraction of non-negative integers.

Given an expression string using the "+" and "-" operators like "5+16-2", write a function to find the total.

Sample input/output:
calculate("6+9-12")  => 3
calculate("1+2-3+4-5+6-7") => -2
calculate("100+200+300") => 600
calculate("1-2-3-0") => -4
calculate("255") => 255

n: length of the input string
*/


function calculate(expression){
  //TODO: Sanitize string for unwanted characters using regex:
  
  return eval(expression);
}
const expression1 = "6+9-12"; // = 3
const expression2 = "1+2-3+4-5+6-7"; // = -2
const expression3 = "100+200+300"; // = 600
const expression4 = "1-2-3-0"; // = -4
const expression5 = "255"; // = 255

console.log(calculate(expression1));
console.log(calculate(expression2));
console.log(calculate(expression3));
console.log(calculate(expression4));
console.log(calculate(expression5));

// const Operators = Object.freeze({'plus': '+', 'minus': '-'});

// function add(num1=0, num2=0){
//   return parseInt(num1)+parseInt(num2);
// }

// function subtract(num1=0, num2=0){
//   return parseInt(num1)-parseInt(num2);
// }

// function getFirstNumber(subStr){
//   if(subStr.length === 1) return subStr;
//   let operator, num=[];
//   for(let i=0; i<subStr.length; i++){
//     if(subStr[i] === Operators.plus || subStr[i] === Operators.minus){
//       //return {num1, opertor, subStr.slice(0, num1.length)} 
//       return num.join('');
//     } else {
//       num.push(subStr[i]);
//     }
//   }  
// }

// function calculation(strInput){
//   if(strInput.length === 1)  return str;
  
//   const str = strInput.split('');
//   const num1 = getFirstNumber(str);
//   let substr = str.slice(0, num1.length);
//   const operator = substr.shift();
//   const num2 = getFirstNumber(substr);
//   substr = str.slice(0, num1.length).join('');

//   console.log(str, num1, substr, operator, num2);
//   if(operator === Operators.plus){
//     num1 = add(num1, num2);    
//   } else if (operator === Operators.minus){
//     num1 = subtract(num1, num2);
//   }
//   console.log(`${num1}`);
//   console.log(`${substr}`);
//   const newString = `${num1}${substr}`;
//   calculation(newString);
// }


// function calculation(str){
//   let i = 0;
//   while(i<str.length){
//     if(str[i+1] && str[i+2]){
//       const num1 = str[i];
//       const operator = str[i+1];
//       const num2 = str[i+2];
//       if(operator === "+"){
//         num1 = add(num1, num2);
//       } else  if(operator === "-"){
//         num1 = subtract(num1, num2);        
//       }
//       i+2;
//     } else {
//       return str[i];
//     }
//   }
//}