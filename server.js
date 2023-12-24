const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const computer = require('./routes/computer')
const port = 5000

dotenv.config({ path: './config/config.env' })

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/computers', computer.getComputers)
app.get('/computers/:id', computer.getComputerById)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})
