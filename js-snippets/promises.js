//Promise has 3 states: unresolved or pending/resolve/reject
//anytime a promise is resolved, then is called
//anytime a promise is rejected, catch is called
//Then and catch can be chained.

/*var promise = new Promise((resolve, reject) => {
    reject();
});*/

var promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 3000)
});

promise
.then(() => console.log("finally finished"))
.then(() => console.log("I was also executed"))
.catch(() => console.log("I was rejected"))

