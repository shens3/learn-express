const express = require('./express');

const app = express();

app.get('/', (req, res, next) => {
  res.end('hello');
})

app.get('/a', (req, res, next) => {
  res.end('a')
})

app.listen(4000)
