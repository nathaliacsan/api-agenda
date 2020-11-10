const contatoCollection = require('../models/contatosSchema')
const { Schema } = require('mongoose')
const contatoCollections = require('../models/contatosSchema')

const getAll = (request, response) => {
    console.log(request.url)

    contatoCollection.find((error, contact) => {
        if(error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).json({
                mensagem: "Tudo certo",
                contact
            })
        }
    })
}

const getByName = (request, response) => {

    const nameParam = request.params

    contatoCollection.find(nameParam, (error, contact) => {

        if(error) {
            return response.status(500).send(error)
        } else {
            if(contact == "") {
                return response.status(200).json({
                    mensagem: "Contato não encontrado"
                })
            } else {
                return response.status(404).json({
                    mensagem: "GET por Id feito com sucesso",
                    contact
                })
            }
        }
    })
}

const getById = (request, response) => {

    const idParam = request.params.id

    contatoCollection.findById(idParam, (error, contact) => {
    
        if (error) { 
            return response.status(500).send({
                mensagem: "Aconteceu um erro.",
                error
            })
        } else {
                return response.status(200).json({
                    mensagem: "Contatinho encontrado",
                    contact})  
        } 

    })
}


const addContact = (request, response) => {
    const contactFromBody = request.body // pegando o body que o usuário digitou
    const contact = new contatoCollection(contactFromBody) // criando um novo dado

    contact.save((error) => {
        if(error) {
            return response.status(400).send(error)
        } else {
            return response.status(200).json({
                mensagem: "POST com sucesso",
                contact
            })
        }
    })
}

const deleteContact = (request, response) => {

    const idParam = request.params.id
    contatoCollection.findByIdAndDelete(idParam, (error, contact) => {

        if(error) {
            return response.status(500).send(error)
        } else {
            if(contact) {
                return response.status(200).json({
                    mensagem: "Contatinho deletado!"
                })
            } else {
                return response.status(404).json({
                    mensagem: "Não foi possível deletar pois esse contatinho não existe na sua agenda."
                })
            }
        }
    })

}

const updateCellPhone = (request, response) => {

    const idParam = request.params.id
    const contactFromBody = request.body
    const update = {new : true}
   
    

        if(contactFromBody.nome != null || contactFromBody.dataNascimento != null) {
            return response.status(400).json(
                {
                mensagem: "Você só pode editar o campo celular"
            })
            
        } else {
            contatoCollection.findByIdAndUpdate(idParam, contactFromBody, update, (error, contact) => {

                if(error) {
                    return response.status(500).send(error)
                } else if (contact) {
                    return response.status(200).json({
                        mensagem: "Celular atualizado",
                        contact
                    })
                } else {
                    return response.status(404).json({
                        mensagem: "Contato não encontrado"
                    })
                }
            })
        }

}

const updateContact = (request, response) => {

    const idParam = request.params.id
    const contactFromBody = request.body
    const update = {new: true}

    contatoCollections.findByIdAndUpdate(idParam, contactFromBody, update, (error, contact) => {

        if(error) {
            return response.status(500).json({
                mensagem: "Aconteceu um erro.",
                error
            })
        } else if (contact) {
            return response.status(200).json({
                mensagem: "Contatinho atualizado.",
            contact})
        } 
    })
}

module.exports = {
    getAll,
    getByName,
    getById,
    addContact,
    deleteContact,
    updateCellPhone,
    updateContact
}