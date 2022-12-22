const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        lowercase: true,
    },
    idade: {
        type: Number,
        required: true,
    }
})


module.exports = mongoose.model('User', Schema)