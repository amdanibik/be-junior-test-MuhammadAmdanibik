
const router = require('express').Router()
const MovieController = require('../controllers').MovieController

router.get('/',MovieController.getMovies)
router.get('/:id',MovieController.getMovieById)

router.post('/',MovieController.createMovie)

router.put('/:id',MovieController.editMovie)
router.delete('/:id',MovieController.deleteMovie)

module.exports = router