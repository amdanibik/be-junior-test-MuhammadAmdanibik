const { Movie, Cast, MovieCast } = require('../../models')


module.exports = async (req,res,next) => {
    let page = req.query.page

    try {
        const movies = await Movie.findAll({
            include: [
                {
                    model: Cast
                }
            ]
        })

        res.status(200).json(movies)
        
    } catch (err) {
        next(err)
    }
}