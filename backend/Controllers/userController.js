const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    console.log(name,email,password)
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('add all fields')
    }
    //check user exists
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error('user exists')
    }
    const salt = bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        name,
        email,
        password: hashedpassword,
    })
    if (user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: gentoken(user._id)
        })
    } else{
        res.status(201)
        throw new Error('invalid login')
    //res.json({reg:'register user'})
}});

const loginUser = asyncHandler(async (req, res) => {
    const { email , password } = req.body
    //check user
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name:user.name,
            token: gentoken(user._id),
        })
    }else{
        res.status(201)
        throw new Error('invalid login')
    }
    res.json({login:'login user'})
});

const getMe =  asyncHandler(async(req, res) => {
    const {_id, name, email } = await User.findById(res.user.id)
    res.status(200).json({
        _id: id,
        name,
    })
    //res.json({me:' user'})
});

//generate token
const gentoken = (id) => {
    return jwt.sign({id},process.env.JWT,{
        expiresIn: '30d'
    }) 
}
module.exports = {
    registerUser,
    loginUser,
    getMe,
}