/*
Determine whether state transitions are valid

all valid state transition(s):
  running -> stopped -> killed
example invalid state transition:
  running -> killed
  
input:
"time:1 id:263d change_to:running cmd:bash",
"time:2 id:8ce4 change_to:running cmd:bash",
"time:3 id:263d change_to:stopped cmd:bash",
"time:4 id:263d change_to:killed cmd:bash",
"time:5 id:263d change_to:running cmd:bash",
"time:6 id:8ce4 change_to:killed cmd:bash",
 
output:
time:1 id:263d, status: OK
time:2 id:8ce4, status: OK
time:3 id:263d, status: OK
time:4 id:263d, status: OK
time:5 id:263d, status: Error
time:6 id:8ce4, status: Error

*/

const input = [
  "time:1 id:263d change_to:running cmd:bash",
  "time:2 id:8ce4 change_to:running cmd:bash",
  "time:3 id:263d change_to:stopped cmd:bash",
  "time:4 id:263d change_to:killed cmd:bash",
  "time:5 id:263d change_to:running cmd:bash",
  "time:6 id:8ce4 change_to:killed cmd:bash"
]

const expectedOutput = [
  "time:1 id:263d status:OK",
  "time:2 id:8ce4 status:OK",
  "time:3 id:263d status:OK",
  "time:4 id:263d status:OK",
  "time:5 id:263d status:Error",
  "time:6 id:8ce4 status:Error"
]

const states = Object.freeze({
  Running: 'running',
  Stopped: 'stopped',
  Killed: 'killed'  
});

const InitialState = {
  next: states.Running,
  change: function(){
    return RunningState;
  }
}
const RunningState = {
  next: states.Stopped,
  change: function(){
    return StoppedState;
  }
}
const StoppedState = {
  next: states.Killed,
  change: function(){
    return KilledState;
  }
}
const KilledState = {
  next: null
}

const States = function (){
  this.currentState = InitialState;
  
  this.change = function (nextState){
    if(this.currentState.next == nextState){
      this.currentState = this.currentState.change(nextState);
      return 'OK'
    } else {
      return 'Error'      
    }
  }
}
  
function runCommands(commands) {
  // write code here
  const output = [], idStatusMap = {};
  commands.forEach(command =>{
    const cmdArgs = command.split(' ');
    const id = cmdArgs[1];
    const newState = cmdArgs[2];
    let out = `time:${cmdArgs[0]} id:${id} status:`;
    if(idStatusMap[id]){      
      out += idStatusMap[id].change(newState);
    } else {
      idStatusMap[id] = new States();
      out += idStatusMap[id].change(newState);
    }
    output.push(out);
  });
  return output;
}

function test() {
  let passed = true;
  
  const output = runCommands(input);
  
  console.log(output)
  
  if(!output || !Array.isArray(output) || output.length === 0 || output.length !== expectedOutput.length) passed = false;
  else {
    output.forEach((line, i) => {
      if(line !== expectedOutput[i]) passed = false;
    });
  }
  
  console.log(`Your Solution: ${passed ? "Passed" : "Failed"}`);
}

test();
