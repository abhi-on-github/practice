var testingTeam = {
  size: 3,
  department: "engineering",
  lead: "QA Lead",
  tester: "QA tester"
}

var engineeringTeam = {
  testingTeam: testingTeam,
  size: 3,
  department: 'engineering',
  manager: "Manager",
  lead: "Lead",
  engineer: "Engineer"
}

function* EngineeringTeamIterator(team){
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator
  yield team.lead
  yield team.manager
  yield team.engineer
}

function* TestingTeamIterator(team){
  yield team.lead
  yield team.tester    
}

var members = [];
for(let member of EngineeringTeamIterator(engineeringTeam)){
  members.push(member);
}

console.log(members);
