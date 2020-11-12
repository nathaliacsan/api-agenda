// Qual o formato do dado que o usuário precisa mandar

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contatoSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId, // tipo de dado dentro do Mongoose, de Id
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    celular: {
        type: String, // número que não fará conta, pode ser string
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    fotoPerfil: {
        type: String,
        required: false
    }
},
{
    versionKey: false
})

const contatoCollections = mongoose.model('contato', contatoSchema)

module.exports = contatoCollections