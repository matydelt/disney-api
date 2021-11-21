
const { User, Character } = require("../db")


async function users(req, res) {
    try {
        const { userName, passWord } = req.body
        if (userName && passWord) {
            const user = await User.findOne({
                where: {
                    userName: userName, passWord: passWord
                }
            })
            if (user.token) return res.send(user.token)
            else res.send("usuario erroneo")
        }
        else res.sendStatus(404)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}
async function characters(req, res) {
    try {
        const { token } = req.query
        const { name, age, weight, history, id, image } = req.body
        const user = await User.findOne({ where: { token: token } })
        if (user) {
            const character = await Character.findByPk(id)
            if (name) character.name = name
            if (age) character.age = age
            if (weight) character.weight = weight
            if (history) character.history = history
            if (image) character.image = image
            await character.save()
            return res.sendStatus(200)
        } else res.send("invalid token")
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}

module.exports = {
    users,
    characters
}
