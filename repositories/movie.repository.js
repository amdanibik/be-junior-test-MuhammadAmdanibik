const { Movie, Cast, MovieCast } = require('../models')

class MovieRepository {
    static async getMovieQuery() {
        return await Movie.findAll({
            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
            include: [
                {
                    model: MovieCast,
                    attributes: { exclude: [ 'updatedAt', 'createdAt', 'cast_id', 'movie_id' ] },
                    required: true,
                    include: [
                        {
                            model: Cast,
                            attributes: { exclude: [ 'updatedAt', 'createdAt' ] },
                            required: true
                        }
                    ]
                }
            ]
        })
    }
}

module.exports = MovieRepository