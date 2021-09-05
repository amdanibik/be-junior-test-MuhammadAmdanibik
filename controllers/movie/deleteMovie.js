const { Movie } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        let id = +req.params.id

        if(isNaN(id)) throw {
            status: 404,
            message: 'movie not found'
        }

        const movie = await Movie.destroy({
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