const { Movie, Cast, MovieCast } = require('../models')

class MovieRepository {
    static async getMovieQuery() {
        return await Movie.findAll({
            include: [
                {
                    model: MovieCast,
                    required: true,
                    include: [
                        {
                            model: Cast,
                            required: true
                        }
                    ]
                }
            ]
        })
    }
}

module.exports = MovieRepository