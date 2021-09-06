const { Cast, Movie } = require('../../models')

module.exports = async (req,res,next) => {
    
    try {
        
        // no pagination or filtering
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