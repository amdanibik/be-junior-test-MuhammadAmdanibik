const CastRepository = require("../repositories/cast.repository")

class CastService {
    static async getCastService() {
        return new Promise(async (resolve, rejects) => {
            try {
                const casts = await CastRepository.getCastQuery()
                return resolve(casts)
            } catch (err) {
                return rejects(err)
            }
        })
    }
}

module.exports = CastService