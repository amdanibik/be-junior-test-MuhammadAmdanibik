const { Movie } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        const payload = {
            name: req.body.name,
            language: req.body.language,
            status: req.body.status,
            rating: req.body.rating
        }

        const movie = Movie.create(payload,{
            returning: true
        })

        res.status(200).json(movie)
    } catch (err) {
        next(err)
    }
}