const express = require('express');
port = 3001

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
  })
