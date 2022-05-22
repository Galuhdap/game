const express = require("express")
const router = express.Router()
const diamondModel = require("../model/Diamonds.model")

router.get("/get", (req, res) => {
    diamondModel.getDiamond(req, res)
})