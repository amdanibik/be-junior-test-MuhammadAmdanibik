
const router = require('express').Router()
const CastController = require('../controllers').CastController

router.get('/',CastController.getCasts)
router.get('/:id',CastController.getCastById)

router.post('/',CastController.createCast)

router.put('/:id',CastController.editCast)
router.delete('/:id',CastController.deleteCast)

module.exports = router