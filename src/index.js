const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const router = require('./Routes/Router')

const app = express()

const dbUri = "mongodb+srv://alicia:1234@cluster0.t3v0wfi.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
},() => console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(9000, ()=> console.log('Server running on port 9000'))