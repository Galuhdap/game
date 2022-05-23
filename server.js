const port = 3002
const express = require("express")
const server = express()
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require("path")
const userController = require("./controller/userController")

server.use(cors())

server.use(bodyparser.json())
server.use(express.json())

server.use(bodyparser.urlencoded({extended: false}))
server.use(express.static(path.join('public')));
server.use('/css', express.static(path.join(__dirname, 'view/css')));
server.use('/css/img', express.static(path.join(__dirname, 'view/img')));

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.use("/hero", userController)

server.use("/", (req,res) => {
    res.send("Conncect Server")
})

server.listen(port,()=>{
    console.log("Server Connection1")
})