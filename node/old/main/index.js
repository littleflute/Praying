const tag = "[main/index.js_v0.0.14] ";

const express = require('express')
const app = express()
const l = require('../../logger');
l.tag(tag + __dirname); 

const port = 8080

app.get('/', (req, res) => {
  res.send(tag + 'Hello World!')
})
app.get('/test', (req, res) => {
  res.send(tag + 'test...')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})