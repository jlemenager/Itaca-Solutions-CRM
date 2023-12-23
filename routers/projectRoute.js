const express = require('express')
const router = express.Router()
const controller = require('../controllers/projectController')

router.get('/', controller.getAllProjects)
router.get('/:id', controller.getProject)
router.post('/post', controller.createProject)
router.put('/put/:id', controller.updateProject)
router.delete('/delete/:id', controller.deleteProject)

module.exports = router