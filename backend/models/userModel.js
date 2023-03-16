const mongoose = reqiure('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, 'please add a name']
    },
    password:{
        type: String,
        require: [true, 'please add a password']
    },
    email:{
        type: String,
        require: [true, 'please add a email']
    },

    }, {
        timeastamps: true
    })

module.exports = mongoose.model('Users', userSchema)