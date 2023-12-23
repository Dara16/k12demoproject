const Pool = require('pg').Pool
const pool = new Pool({
    user: 'dara',
    host: 'localhost',
    database: 'api',
    password: 'shoyinka',
    port: 5432,
})

const getComputers = (request, response) => {
    pool.query('SELECT * FROM computers ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
  
const getComputerById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM computers WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}
  

  
module.exports = {
getComputers,
getComputerById,
}