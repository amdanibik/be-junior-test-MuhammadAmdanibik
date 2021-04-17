const router = require('express').Router()
const movie = require('./movie.router')
const cast = require('./cast.router')

router.use('/movies', movie)
router.use('/casts', cast)

module.exports = router