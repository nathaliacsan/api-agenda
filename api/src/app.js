const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models/repository')

app.use(cors())
app.use(express.json())

db.connect()

const index = require('./routes/index')
const contatos = require('./routes/contatosRoutes')

app.use('/', index)
app.use('/contatos', contatos)

module.exports = app
