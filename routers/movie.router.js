const router = require('express').Router()
const MovieService = require('../services/movie.service')

router.get('/', MovieService.getMovieService)

module.exports = router