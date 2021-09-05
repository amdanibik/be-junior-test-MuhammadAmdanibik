const { Movie } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        const payload = {
            name: req.body.name,
            language: req.body.language,
            status: req.body.status,
            rating: req.body.rating
        }

        await Movie.create(payload,{
            returning: true
        })

        res.status(200).json({
            message: 'ok'
        })
    } catch (err) {
        next(err)
    }
}