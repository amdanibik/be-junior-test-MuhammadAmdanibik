const CastService = require("../services/cast.service")

class CastController {
    static async getCast(req, res, next) {
        try {
            const { name } = req.query
            const result = await CastService.getCastService(name)
            return res.status(200).json({
                status: 'OK',
                data: result
            })
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = CastController