
const { User, Character } = require("../db")


async function characters(req, res) {
    try {
        const { token } = req.query
        const { id } = req.body
        const user = await User.findOne({ where: { token: token } })
        if (user) {
            await Character.destroy({ where: { id } })
            return res.sendStatus(200)
        } else res.send("invalid token")
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}

module.exports = {
    characters
}