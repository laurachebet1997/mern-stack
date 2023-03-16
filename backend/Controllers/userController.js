//const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

const registerUser = (req, res) => {
    //const goals = await Goal.find()
    res.status(200).json({reg:'register user'})
};

const loginUser = (req, res) => {
    //const goals = await Goal.find()
    res.status(200).json({login:'login user'})
};

const getMe =  (req, res) => {
    //const goals = await Goal.find()
    res.status(200).json({me:' user'})
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
}