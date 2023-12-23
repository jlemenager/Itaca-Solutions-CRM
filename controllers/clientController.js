const { Client } = require('../models')

const getAllClients = async(req,res) => {
    try {
        const clients = await Client.find()
        return res.status(200).json({ clients })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getClient = async(req,res) => {
    try {
        const { id } = req.params
        const client = await Client.findById(id)
        if (client){
            return res.status(200).json({ client })
        } else {
            return res.status(400).send('Client not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createClient = async(req, res) => {
    try{
        const client = new Client(req.body)
        await client.save()
        return res.status(200).json({ client })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateClient = async(req,res) => {
    try{
        const { id } = req.params
        const client = await Client.findByIdAndUpdate(id, req.body, {new:true})
        if (client){
            res.status(200).json({ client })
        } else {
            res.status(400).send("Client doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteClient = async(req,res) => {
    try{
        const { id } = req.params
        const client = await Client.findByIdAndDelete(id, req.body, {new:true})
        if(client){
            return res.status(200).json({ client })
        } else {
            return res.status(400).send("Client doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
}