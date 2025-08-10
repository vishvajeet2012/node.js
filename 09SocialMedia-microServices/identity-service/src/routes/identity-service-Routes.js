const express =  require("express")
const { signUP } = require("../controller/identityControler")

const router = express.Router()

router.post("/signup",signUP)


module.exports =router