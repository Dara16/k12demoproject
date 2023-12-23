const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/computers', db.getComputers)
app.get('/computers/:id', db.getComputerById)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})

