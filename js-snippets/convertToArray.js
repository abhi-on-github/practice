let peopleArray = [
  { id: 123, name: "dave", age: 23 },
  { id: 456, name: "chris", age: 23 },
  { id: 789, name: "bob", age: 23 },
  { id: 101, name: "tom", age: 23 },
  { id: 102, name: "tim", age: 23 }
]

function arrayToObject (array){
    return array.reduce((obj, item) => {
     obj[item.id] = item
     return obj
   }, {})
}

let peopleObject = arrayToObject(peopleArray)
console.log(peopleObject);
