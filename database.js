const mysql = require('mysql')
const express = require('express')
const app = express()

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
})
app.use(
    express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/', (req, res) => {
    if(req.body && conn){
        if(req.body.name && req.body.age){
            const query = `INSERT INTO people (name, age) VALUES ('${req.body.name}', ${req.body.age})`
            conn.query(query, (err, result) => {
                if(err) throw err
                console.log("Success")
            })
            res.status(200).json({
                status: "OK"
            })
        } else {
            res.status(400).json({
                error: "Something missing"
            })
        }
        
    }
})

app.listen(8000, (req, res) => {
    console.log('Olá')
})