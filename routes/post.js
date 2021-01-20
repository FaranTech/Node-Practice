const express = require("express")
const router = express.Router()
const controle = require("../controller/post")
router.get('/', controle.getPost)

module.exports = router;
