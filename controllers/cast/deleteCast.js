const { Cast } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        let id = +req.params.id

        if(isNaN(id)) throw {
            status: 404,
            message: 'cast not found'
        }

        const cast = await Cast.destroy({
            where: {
                id
            }
        })

        res.status(200).json({
            message: cast
        })
    } catch (err) {
        next(err)
    }
}