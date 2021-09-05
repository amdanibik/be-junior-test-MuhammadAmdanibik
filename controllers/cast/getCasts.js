const { Cast, Movie } = require('../../models')

module.exports = async (req,res,next) => {
    
    try {
        let page = req.query.page || 0

        const casts = await Cast.findAll({
            include: [
                {
                    model: Movie
                }
            ],
            limit: 10,
            offset: (page * 10)
        })

        res.status(200).json(casts)
        
    } catch (err) {
        next(err)
    }
}