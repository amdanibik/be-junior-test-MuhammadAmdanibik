const { Cast } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        const payload = {
            name: req.body.name,
            birthday: req.body.birthday,
            deadday: req.body.deadday,
            rating: req.body.rating
        }

        await Cast.create(payload)

        res.status(200).json({
            message: 'ok'
        })
    } catch (err) {
        next(err)
    }
}