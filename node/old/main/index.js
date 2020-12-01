const tag = "[main/index.js_v0.0.12] ";

const express = require('express')
const app = express()
const l = require('../../logger');
l.tag(tag + __dirname); 

const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})