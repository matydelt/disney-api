const { User } = require("../db")
const rand = () => Math.random(0).toString(36).substr(2);
const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);


async function users(req, res) {
    try {
        const { userName, passWord } = req.body

        const newToken = token(20)
        const user = await User.create({
            userName, passWord, token: newToken
        })
        if (user) return res.sendStatus(200)
        else res.sendStatus(500)

    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}


module.exports = {
    users
}