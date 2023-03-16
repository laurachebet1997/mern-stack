const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, 'please add a name']
    },
    email:{
        type: String,
        require: [true, 'please add a password']
    },
    password:{
        type: String,
        require: [true, 'please add a email']
    },

    }, {
        timestamps: true
    })

module.exports = mongoose.model('Users', userSchema)