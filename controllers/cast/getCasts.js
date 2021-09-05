const { Cast, Movie } = require('../../models')

module.exports = async (req,res,next) => {
    
    try {

        const casts = await Cast.findAll({
            include: [
                {
                    model: Movie,
                    as: 'movies'
                }
            ]
        })

        res.status(200).json(casts)
        
    } catch (err) {
        next(err)
    }
}