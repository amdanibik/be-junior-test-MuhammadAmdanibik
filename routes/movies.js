const router = require('express').Router();
const handler = require('../handler/movie');

router.get('/', handler.getMovies);
router.get('/:id', handler.getMovie);
router.post('/', handler.addMovie);
router.put('/:id', handler.updateMovie);
router.delete('/:id', handler.deleteMovie);

module.exports = router;