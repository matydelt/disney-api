const { Router } = require('express');
const post = require("../controllers/posts")
const put = require("../controllers/put")

const router = Router();

router.post("/auth/register", post.users)
router.put("/auth", put.users)

module.exports = router; 
