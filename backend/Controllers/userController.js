const asyncHandler = require('express-async-handler');
const User = require('../models/userModels')

const registerUser = asyncHandler(async (req, res) => {
    //const goals = await Goal.find()
    res.status(200).json({reg:'register user'})
});

const loginUser = asyncHandler(async (req, res) => {
    //const goals = await Goal.find()
    res.status(200).json({login:'login user'})
});

const getMe = asyncHandler(async (req, res) => {
    //const goals = await Goal.find()
    res.status(200).json({me:' user'})
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
}