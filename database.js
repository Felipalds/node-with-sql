const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
})

conn.connect((err) => {
    if(err) throw err
    console.log("Database connected!")
    conn.query("CREATE TABLE people (name VARCHAR (255), age TINYINT(3))", (err, result)=>{
        if(err) throw err
        console.log("Table created")
    })
})