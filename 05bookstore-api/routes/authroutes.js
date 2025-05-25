const express = require('express')
const { registorUser, loginUser } = require('../Controller/userControler')
const authRoutes = express.Router()



authRoutes.post('/registor',registorUser)
authRoutes.post('/login',loginUser)


module.exports =authRoutes