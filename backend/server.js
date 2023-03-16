const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const { errorHandler } = require('./Middlewares/errorMiddleware')
const connectDb = require('./configs/db')
var bodyParser = require('body-parser')
//import routes from ''./Routes/goalRoutes'

connectDb()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(errorHandler)

app.use('/api/goals', require('./Routes/goalRoutes'))
app.use('/api/users', require('./Routes/userRoutes'))


app.listen(port,console.log(`app listenning on ${port}`))
console.log('hello')