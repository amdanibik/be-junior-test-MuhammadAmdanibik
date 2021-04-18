const CastRepository = require("../repositories/cast.repository")

class CastService {
    static async getCastService(name) {
        return new Promise(async (resolve, rejects) => {
            try {
                const casts = await CastRepository.getCastQuery(name)
                return resolve(casts)
            } catch (err) {
                console.log(err);
                return rejects(err)
            }
        })
    }
}

module.exports = CastService