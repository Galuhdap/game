const db = require("../config")

exports.getDiamond = (res) => {

    const sql = "SELECT * FROM `users`"

    db.query(sql , (error, result) => {
        if(error) return console.log("error : ", error)
        const hero = {
            data : JSON.parse(JSON.stringify(result))
        }
        console.log(hero)
        // res.render(hero)
        res.send(hero)
        res.end()
    })
}