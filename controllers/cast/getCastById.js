const { Cast, Movie } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        let id = +req.params.id
        
        if(isNaN(id)) throw {
            status: 404,
            message: 'cast not found'
        }
        const casts = await Cast.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Movie
                }
            ]
        })

        if(casts == null) throw {
            status: 404,
            message: 'cast not found'
        }

        res.status(200).json(casts)
        
    } catch (err) {
        next(err)
    }
}