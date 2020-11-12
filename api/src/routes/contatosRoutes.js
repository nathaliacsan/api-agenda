const express = require('express')
const router = express.Router()

const controller = require('../controller/contatosController')

router.get('/', controller.getAll)
router.get('/nome', controller.getByName)
router.get('/id/:id', controller.getById)
router.post('/criar', controller.addContact)
router.delete('/deletar/:id', controller.deleteContact)
router.put('/atualizar/telefone/:id', controller.updateCellPhone)
router.put('/atualizar/:id', controller.updateContact)

module.exports = router