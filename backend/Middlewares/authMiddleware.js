const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
//const { id } = require('../Controllers/userController')

const protect = asyncHandler(async(req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT)
            req.user = await User.findById({decoded}).select('-password')
            next()
        }catch(error) {
            //console.log(error)
            res.status(400)
            //throw new Error('not authorized')
        }
    }
    if(!token) {
        res.status(400)
        throw new Error('no token')
    }
})

module.exports = {
    protect,
}