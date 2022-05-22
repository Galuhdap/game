const mysql = require("mysql")

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nasabah"
})

database.connect((error) => {
    if(error) throw error
    console.log("Connection in Server Boss....✨s")
})

module.exports = database