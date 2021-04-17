const CastRepository = require("../repositories/cast.repository")

class CastService {
    static async getCastService(_, res, next) {
        try {
            const casts = await CastRepository.getCastQuery()
            return res.status(200).json({
                status: 'OK',
                data: casts
            })
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = CastService