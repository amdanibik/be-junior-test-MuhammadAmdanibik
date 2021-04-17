const { Movie, Cast, MovieCast } = require('../models')

class CastRepository {
    static async getCastQuery() {
        return await Cast.findAll({
            include: [
                {
                    model: MovieCast,
                    required: true,
                    include: [
                        {
                            model: Movie,
                            required: true
                        }
                    ]
                }
            ]
        })
    }
}

module.exports = CastRepository