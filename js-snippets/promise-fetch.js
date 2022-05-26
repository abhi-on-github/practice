//With fetch its required to call response.json to access data


var url = `https://jsonplaceholder.typicode.com/posts`;
fetch(url)
    .then(response => {
        response.json()
        })
    .then(data => console.log(data))
    .catch(error => console.log('BAD', error))

