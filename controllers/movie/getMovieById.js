const { Movie, Cast } = require('../../models')

module.exports = async (req,res,next) => {
    
    try {
        let id = +req.params.id
        
        if(isNaN(id)) throw {
            status: 404,
            message: 'movie not found'
        }
        const movies = await Movie.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Cast
                }
            ]
        })

        if(movies == null) throw {
            status: 404,
            message: 'movie not found'
        }

        res.status(200).json(movies)
        
    } catch (err) {
        next(err)
    }
}