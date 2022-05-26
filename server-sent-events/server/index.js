const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', "text/event-stream");  
  res.setHeader('Access-Control-Allow-Headers', "*");
  send(res);

});

let i=0;
function send(res) {
  res.write("data: "+ `Hello!${i++}\n\n`);
  setTimeout(() => send(res), 1000);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
