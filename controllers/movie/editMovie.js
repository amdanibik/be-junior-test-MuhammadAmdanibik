const { Movie } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        let id = +req.params.id

        if(isNaN(id)) throw {
            status: 404,
            message: 'movie not found'
        }

        const payload = {
            name: req.body.name,
            language: req.body.language,
            status: req.body.status,
            rating: req.body.rating
        }
        
        const movie = await Movie.update(payload, {
            where: {
                id
            }
        })

        res.status(200).json({
            message: movie
        })
    } catch (err) {
        next(err)
    }
}