const { User } = require("../db")
const rand = () => Math.random(0).toString(36).substr(2);
const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);


async function users(req, res) {
    try {
        const { userName, PassWord } = req.body
        if (userName, PassWord) {
            const newToken = token(20)
            const user = await User.create({
                userName, PassWord, token: newToken
            })
            if (user) return res.sendStatus(200)
        }
    } catch (e) {
        console.log(e)
    }


}


module.exports = {
    users
}