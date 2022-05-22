const express = require("express")
const router = express.Router()
const userModel =  require("../model/Hero.model")

router.get("/user", (req, res) => {
    console.log("Masuk")
    userModel.getHero(res)
})

router.get("/:id", (req, res) => {
    console.log("Cek ID", req.params.id)
    const id = req.params.id
    userModel.getHeroById(id, res)
})

router.post("/add", (req, res) => {
    userModel.addHero(req, res)
})

router.post("/edit", (req, res) => {
    const data = {
        "id": req.body.id,
        "nama": req.body.nama,
        "alamat": req.body.alamat
    }
    userModel.editHero(data, res)
})

router.post("/remove" , (req , res) => {
    const id = req.body.id
    userModel.removeHero(id , res)
})

module.exports = router;