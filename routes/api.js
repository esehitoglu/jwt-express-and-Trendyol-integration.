// api.js
const express = require('express')

const router = express.Router()

//End points
const userEndPoint = require('./user/user')
const brandEndpoint = require('./brand/brand'); 

router.use('/user',userEndPoint)
router.use('/brand',brandEndpoint)

module.exports = router
