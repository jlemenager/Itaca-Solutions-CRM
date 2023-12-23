const { Location } = require('../models')

const getAllLocations = async(req,res) => {
    try {
        const locations = await Location.find()
        return res.status(200).json({ locations })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getLocation = async(req,res) => {
    try {
        const { id } = req.params
        const location = await Location.findById(id)
        if (location){
            return res.status(200).json({ location })
        } else {
            return res.status(400).send('Location not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createLocation = async(req, res) => {
    try{
        const location = new Location(req.body)
        await location.save()
        return res.status(200).json({ location })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateLocation = async(req,res) => {
    try{
        const { id } = req.params
        const location = await Location.findByIdAndUpdate(id, req.body, {new:true})
        if (location){
            res.status(200).json({ location })
        } else {
            res.status(400).send("Location doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteLocation = async(req,res) => {
    try{
        const { id } = req.params
        const location = await Location.findByIdAndDelete(id, req.body, {new:true})
        if(location){
            return res.status(200).json({ location })
        } else {
            return res.status(400).send("Location doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllLocations,
    getLocation,
    createLocation,
    updateLocation,
    deleteLocation
}