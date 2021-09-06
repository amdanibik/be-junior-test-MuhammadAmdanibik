const { Movie, Cast } = require('../../models')


module.exports = async (req,res,next) => {
    
    try {

        // no pagination or filtering
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