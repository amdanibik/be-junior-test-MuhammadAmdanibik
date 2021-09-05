
const router = require('express').Router()
const movieRouter = require('./movieRoute')
const castRouter = require('./castRoute')

router.get('/ping',(req,res) => res.send("pong"))

router.use('/movies', movieRouter)
router.use('/casts', castRouter)


module.exports = router