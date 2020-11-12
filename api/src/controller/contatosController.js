const contatoCollection = require('../models/contatosSchema')
const { Schema } = require('mongoose')
const contatoCollections = require('../models/contatosSchema')

const getAll = (request, response) => {
    console.log(request.url)

    contatoCollection.find((error, contact) => {
        if(error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: "Tudo certo",
                contact
            })
        }
    })
}

const getByName = (request, response) => {

    const nameParam = request.query

    contatoCollection.find(nameParam, (error, contact) => {

        if(error) {
            return response.status(500).send(error)
        } else {
            if(contact == "") {
                return response.status(200).send({
                    mensagem: "Contato não encontrado"
                })
            } else {
                return response.status(404).send({
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
                return response.status(200).send({
                    mensagem: "Contatinho encontrado",
                    contact})  
        }   

    })
}


const addContact = (request, response) => {
    const contactFromBody = request.body 
    const contact = new contatoCollection(contactFromBody) 

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
                return response.status(200).send({
                    mensagem: "Contatinho deletado!"
                })
            } else {
                return response.status(404).send({
                    mensagem: "Não foi possível deletar. Esse contatinho não existe na sua agenda."
                })
            }
        }
    })

}

const updateCellPhone = (request, response) => {

    const idParam = request.params.id
    const contactFromBody = request.body
    const update = {new : true}
   
    

        if(contactFromBody.nome != null || contactFromBody.dataNascimento != null || contactFromBody.fotoPerfil != null) {
            return response.status(400).send(
                {
                mensagem: "Você só pode editar o campo celular."
            })
            
        } else {
            contatoCollection.findByIdAndUpdate(idParam, contactFromBody, update, (error, contact) => {

                if(error) {
                    return response.status(500).send(error)
                } else if (contact) {
                    return response.status(200).send({
                        mensagem: "Celular atualizado.",
                        contact
                    })
                } else {
                    return response.status(404).send({
                        mensagem: "Contato não encontrado."
                    })
                }
            })
        }

}

const updateContact = (request, response) => {


    const idParam = request.params.id
    const contactFromBody = request.body
    const update = {new: true}

    contatoCollections.findByIdAndUpdate(
        idParam, 
        contactFromBody, 
        update, (error, contact) => {

        if(error) {
            return response.status(500).send({
                mensagem: "Aconteceu um erro.",
                error
            })
        } else {
            return response.status(200).send({
                mensagem: "Contatinho atualizado.",
                contact
            })
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