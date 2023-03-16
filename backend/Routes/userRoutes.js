const express = require('express')
const router = express.Router()
const { registerUser,loginUser,getMe } = require('../Controllers/userController')


router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/me', getMe)


module.exports = router