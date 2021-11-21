const { Router } = require('express');

const get = require("../controllers/gets")
const post = require("../controllers/posts")
const erase = require("../controllers/delete")
const put = require("../controllers/put")

const router = Router();

router.get("/characters", get.characters)
router.post("/character/new", post.characters)
router.delete("/character/delete", erase.characters)
router.put("/character/put", put.characters)


module.exports = router;

