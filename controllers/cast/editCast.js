const { Cast } = require('../../models')

module.exports = async (req,res,next) => {

    try {
        let id = +req.params.id

        if(isNaN(id)) throw {
            status: 404,
            message: 'cast not found'
        }

        const payload = {
            name: req.body.name,
            birthday: req.body.birthday,
            deadday: req.body.status,
            rating: req.body.rating
        }
        
        const cast = await Cast.update(payload, {
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