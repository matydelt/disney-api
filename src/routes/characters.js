const { Router } = require('express');

const get = require("../controllers/gets")


const router = Router();

router.get("/characters", get.characters)


module.exports = router;

