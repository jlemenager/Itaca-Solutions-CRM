const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientController')

router.get('/', controller.getAllClients)
router.get('/:id', controller.getClient)
router.post('/post', controller.createClient)
router.put('/put/:id', controller.updateClient)
router.delete('/delete/:id', controller.deleteClient)

module.exports = router