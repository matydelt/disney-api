const { Router } = require('express');
const post = require("../controllers/posts")

const router = Router();

router.get("/auth/register", post.users)

module.exports = {
    router: router
};
