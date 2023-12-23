const express = require('express')
const router = express.Router()
const controller = require('../controllers/expertiseController')

router.get('/', controller.getAllExpertises)
router.get('/:id', controller.getExpertise)
router.post('/post', controller.createExpertise)
router.put('/put/:id', controller.updateExpertise)
router.delete('/delete/:id', controller.deleteExpertise)

module.exports = router