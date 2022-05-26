var testingTeam = {
  size: 3,
  department: "engineering",
  lead: "QA Lead",
  tester: "QA tester",
  [Symbol.iterator]: function* () {
      yield this.lead
      yield this.tester
  }
}

var engineeringTeam = {
  testingTeam: testingTeam,
  size: 3,
  department: 'engineering',
  manager: "Manager",
  lead: "Lead",
  engineer: "Engineer",
  [Symbol.iterator]: function* (){
      yield this.lead
      yield this.manager
      yield this.engineer
      yield* this.testingTeam       
  }

}

var members = [];
for(let member of engineeringTeam){
  members.push(member);
}

console.log(members);
