const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    porcentagem_lucro: {
        type: Number,
        required: true,
    },
    data_lancamento: {
        type: String,
        required: true,

    }
})


module.exports = mongoose.model('Foguete', Schema)