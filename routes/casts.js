const router = require('express').Router();
const handler = require('../handler/cast');

router.get('/', handler.getCasts);
router.get('/:id', handler.getCast);
router.post('/', handler.addCast);
router.put('/:id', handler.updateCast);
router.delete('/:id', handler.deleteCast);

module.exports = router;