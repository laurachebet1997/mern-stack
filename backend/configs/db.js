const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        //const conn = await mongoose.connect("mongodb+srv://laura:mongo@clusterlaura.8w7kr48.mongodb.net/?retryWrites=true&w=majority")
        const conn = await mongoose.connect('mongodb://localhost/userdata')
        console.log(`${conn.connection.host}`)
    }
    catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb