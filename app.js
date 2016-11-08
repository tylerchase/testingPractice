const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.sendFile('index.html', {root: __dirname + '/public'}, (err) => {
    next(err); 
  })
})

module.exports = app;
