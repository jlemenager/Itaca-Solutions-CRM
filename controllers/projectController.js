const { Project } = require('../models')

const getAllProjects = async(req,res) => {
    try {
        const projects = await Project.find()
        return res.status(200).json({ projects })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getProject = async(req,res) => {
    try {
        const { id } = req.params
        const project = await Project.findById(id)
        if (project){
            return res.status(200).json({ project })
        } else {
            return res.status(400).send('Project not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createProject = async(req, res) => {
    try{
        const project = new Project(req.body)
        await project.save()
        return res.status(200).json({ project })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateProject = async(req,res) => {
    try{
        const { id } = req.params
        const project = await Project.findByIdAndUpdate(id, req.body, {new:true})
        if (project){
            res.status(200).json({ project })
        } else {
            res.status(400).send("Project doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteProject = async(req,res) => {
    try{
        const { id } = req.params
        const project = await Project.findByIdAndDelete(id, req.body, {new:true})
        if(project){
            return res.status(200).json({ project })
        } else {
            return res.status(400).send("Project doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
}