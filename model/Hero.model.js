const db = require("../config")

exports.getHero = (res) => {

    const sql = "SELECT * FROM `users`"

    db.query(sql , (error, result) => {
        if(error) return console.log("error : ", error)
        const hero = {
            title: "MOBILEGEN BANG BANG",
            data : JSON.parse(JSON.stringify(result))
        }
        // console.log(hero)
        // res.json({status: 200 ,  payload: result})
        // res.render(hero)
        // res.send(hero)
        res.render('../view/html/index', { hero })
        res.end()
    })
}

exports.getHeroById = (id , res) => {
    const sql = `SELECT * FROM users WHERE id = '${id}'`
    console.log(sql)

    db.query(sql, (error , result) => {
        if(error) return console.log("error : ", error)
        const heroId = {
            title: "Hero ID Boss",
            data : JSON.parse(JSON.stringify(result))
        }
        console.log(heroId)
        res.json({status: 200 ,  payload: result})
        res.render('../view/html/updeat', { heroId })
    })
}

exports.addHero = (req, res) => {
    const sql = `INSERT INTO users SET nama = '${req.body.nama}', alamat =  '${req.body.alamat}' `;

    console.log(sql)

    db.query(sql, (err, results) => {
        res.json({status: 200 , payload: results})
    })
}

exports.editHero = (req, res) => {
    const id = req.id
    const nama = req.nama
    const alamat = req.alamat

    const sql = `UPDATE users SET nama = '${nama}' , alamat = '${alamat}' WHERE id = '${id}'`;

    console.log(sql)

    db.query(sql, (err, results) => {
        if(err) return console.log("error : ", err)
        console.log("Masuk")
        res.json({status: 200 , payload: results})
    })
}

exports.removeHero = (id, res) => {

    const sql = `DELETE FROM users WHERE id = ${id}`

    db.query(sql, (err, results) => {
        if(err) return console.log("ERROR BOS : " , err)
        res.json({status: 200 , payload: results})
    })
}