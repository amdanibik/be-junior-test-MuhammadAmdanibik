const { Movie, Cast, MovieCast } = require('../../models')


module.exports = async (req,res,next) => {
    
    try {

        const movies = await Movie.findAll({
            include: [
                {
                    model: Cast,
                    as: 'casts'
                }
            ]
        })

        res.status(200).json(movies)
        
    } catch (err) {
        next(err)
    }
}