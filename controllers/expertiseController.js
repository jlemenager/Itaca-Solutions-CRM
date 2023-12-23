const { Expertise } = require('../models')

const getAllExpertises = async(req,res) => {
    try {
        const expertises = await Expertise.find()
        return res.status(200).json({ expertises })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getExpertise = async(req,res) => {
    try {
        const { id } = req.params
        const expertise = await Expertise.findById(id)
        if (expertise){
            return res.status(200).json({ expertise })
        } else {
            return res.status(400).send('Expertise not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createExpertise = async(req, res) => {
    try{
        const expertise = new Expertise(req.body)
        await expertise.save()
        return res.status(200).json({ expertise })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateExpertise = async(req,res) => {
    try{
        const { id } = req.params
        const expertise = await Expertise.findByIdAndUpdate(id, req.body, {new:true})
        if (expertise){
            res.status(200).json({ expertise })
        } else {
            res.status(400).send("Expertise doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteExpertise = async(req,res) => {
    try{
        const { id } = req.params
        const expertise = await Expertise.findByIdAndDelete(id, req.body, {new:true})
        if(expertise){
            return res.status(200).json({ expertise })
        } else {
            return res.status(400).send("Expertise doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllExpertises,
    getExpertise,
    createExpertise,
    updateExpertise,
    deleteExpertise
}