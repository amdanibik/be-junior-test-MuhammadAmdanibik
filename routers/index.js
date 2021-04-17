const router = require('express').Router()
const movie = require('./movie.router')
const cast = require('./cast.router')
const passport = require('../middlewares/auth.middleware')

router.get('/api/unauthorized', (req, res, next) => next({ name: 'Unauthorized', errors: [{ message: 'Unauthorized user cannot access this endpoint.' }] }))
router.use(passport.authenticate('headerapikey', { session: false, failureRedirect: '/api/unauthorized' }), (req, res, next) => next())
router.use('/movies', movie)
router.use('/casts', cast)

module.exports = router