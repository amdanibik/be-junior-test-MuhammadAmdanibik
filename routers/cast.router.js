const router = require('express').Router()
const CastService = require('../services/cast.service')

router.get('/', CastService.getCastService)

module.exports = router