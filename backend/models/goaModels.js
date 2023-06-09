const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: [true, 'please add a text'],
        ref: 'User'
    },
    text:{
        type: String,
        require: [true, 'please add a text']
    },
},{
    timestamps: true,
}
)

module.exports = mongoose.model('Goal', goalSchema)