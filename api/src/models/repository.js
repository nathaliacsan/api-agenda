const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost:27017/contatosReprograma" // nome da conexão

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true}) // cetando uma conexão padrão
    const connection = mongoose.connection

    // o proprio mongo envia o erro
    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open', () => console.log('Conectamos no Mongo'))
}

module.exports = {connect}

// arquivo Repository CRIA a Conexão