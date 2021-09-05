const { Movie, Cast } = require('../../models')


module.exports = async (req,res,next) => {
    
    try {
        let page = req.query.page || 0
        
        const movies = await Movie.findAll({
            include: [
                {
                    model: Cast
                }
            ],
            limit: 10,
            offset: (page * 10)
        })

        res.status(200).json(movies)
        
    } catch (err) {
        next(err)
    }
}