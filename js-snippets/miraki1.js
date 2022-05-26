//Device offline bar
//0               5, 7,     30,     45            
//+++++++++++++++++---++++++++--------
//Output: [[5, 7], [30, 45]]
var ON = 1;
var OFF = 0;

var input = [[5, ON], [7, OFF], [30, ON], [45, OFF]]

function transform(input){
    let output = [], subArray = [0];
    input.forEach(status => {
       if(status[1]) {
           subArray[0] = status[0];
       } else {
           subArray[1] = status[0];
           output.push(subArray);
           subArray = [];
       }
    });
    return output;
}

console.log(transform(input));