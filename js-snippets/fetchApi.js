// GET
var url = `https://jsonplaceholder.typicode.com/users/2`
fetch(url)
    .then(res => res.json())
    .then(res => console.log(res));

var getAllUrl = `https://jsonplaceholder.typicode.com/users`;
fetch(getAllUrl).then(res => res.json());

//POST
var postUrl = `https://jsonplaceholder.typicode.com/users/`;
fetch(postUrl, {
    headers: {'content-type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({
        username: "Elon Musk",
        email: "elonmusk@gmail.com"
    }) 
});

//PUT
var putUrl = `https://jsonplaceholder.typicode.com/users/1`
fetch(putUrl, {
    headers: {'content-type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify({
        username: 'Elon Musk modified',
        email: 'elonmuskModi@gmail.com'
    })
});

//DELETE
var deleteurl = `https://jsonplaceholder.typicode.com/users/1`
fetch(deleteurl, {
    headers: {'content-type': 'application/json'},
    method: 'DELETE'
})