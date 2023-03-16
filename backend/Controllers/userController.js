const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    console.log(name)
    if(!name) {
        res.status(400)
        throw new Error('add all fields')
    }
    //check user exists
    //const userExist = await User.findOne({email})
    //if(userExist) {
        //res.status(400)
        //.json({me:'add fields'})
        //throw new Error('user exists')
    //}
    //const salt = bcrypt.genSalt(10)
    //const hashedpassword = await bcrypt.hash(password, salt)
    //const user = await User.create({
        //name,
       // email,
       // password,
    //})
    //if (user){
        //res.status(201).json({
            //_id: user._id,
            //name: user.name
        //})
    //} else{
        //res.status(201).json({msg: "invalid login"})}
    res.json({reg:'register user'})
});

const loginUser = asyncHandler(async (req, res) => {
    //const goals = await Goal.find()
    res.json({login:'login user'})
});

const getMe =  asyncHandler(async(req, res) => {
    //const goals = await Goal.find()
    res.json({me:' user'})
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
}