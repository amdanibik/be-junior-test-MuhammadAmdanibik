const { Movie, Cast, MovieCast } = require('../models')

class CastRepository {
    static async getCastQuery() {
        return await Cast.findAll({
            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
            include: [
                {
                    model: MovieCast,
                    required: true,
                    attributes: { exclude: [ 'updatedAt', 'createdAt', 'cast_id', 'movie_id' ] },
                    include: [
                        {
                            model: Movie,
                            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
                            required: true
                        }
                    ]
                }
            ]
        })
    }
}

module.exports = CastRepository