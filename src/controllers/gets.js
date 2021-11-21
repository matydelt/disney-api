
const { User, Character } = require("../db")

async function characters(req, res) {
    try {
        const { token } = req.query
        const user = await User.findOne({ where: { token: token } })
        if (user) {
            const characters = await Character.findAll({ attributes: ["name", "image"] })
            return res.json(characters)
        } else res.send("invalid token")
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}


module.exports = {
    characters
}