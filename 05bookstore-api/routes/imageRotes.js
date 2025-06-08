const express =require('express')
const authMiddleware = require('../middleware/authmiddleware')
const router = express.Router
const uploadMiddleware = require('..//middleware/upload-middleware')
const uploadIMgeControler = require("../Controller/imageControler")
////upload image router
router.post("/uploadImage",authMiddleware,uploadMiddleware.single('image'),uploadIMgeControler)