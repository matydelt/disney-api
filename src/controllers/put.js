
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

module.exports = {
    users
}
