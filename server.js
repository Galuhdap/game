const port = 3002
const express = require("express")
const server = express()
const bodyparser = require("body-parser")
const cors = require("cors")
const userController = require("./controller/userController")

server.use(cors())

server.use(bodyparser.json())
server.use(express.json())

server.use(bodyparser.urlencoded({extended: false}))
server.set("view engine", "ejs")
server.set("views", "view")

server.use("/hero", userController)

server.use("/", (req,res) => {
    res.send("Conncect Server")
})

server.listen(port,()=>{
    console.log("Server Connection1")
})