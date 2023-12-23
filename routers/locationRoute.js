const express = require('express')
const router = express.Router()
const controller = require('../controllers/locationController')

router.get('/', controller.getAllLocations)
router.get('/:id', controller.getLocation)
router.post('/post', controller.createLocation)
router.put('/put/:id', controller.updateLocation)
router.delete('/delete/:id', controller.deleteLocation)

module.exports = router