const tag = "[main/index.js_v0.0.15] ";

const express = require('express')
const app = express()
const ut = require('../utils/test');

const l = require('../../logger');
l.tag(tag + __dirname); 

const port = 8080

app.get('/', (req, res) => {
  res.send(tag + 'Hello World!')
})
app.get('/test', (req, res) => {
  res.send(tag + ut.f1())
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})